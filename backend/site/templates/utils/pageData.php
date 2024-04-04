<?php

use Kirby\Cms\Url;

function templateName($page) {
  $template = (string) $page->template()->name();
  $name = $template;
  if ($template === 'error') {
    $name = 'NotFound';
  } elseif ($template === 'event-item') {
    $name = 'Events/Info';
  } elseif ($template === 'events') {
    $name = 'Events/Index';
  }
  return ucfirst($name);
}

function pageData($page) {
  $state = (object) array(
    'none' => null,
    'new' => 'new',
    'comingSoon' => 'comingSoon',
  );
  $site = $page->site();
  $kirby = $site->kirby();
  // languages
  $lang = $kirby->language();
  $langs = $kirby->languages();
  $langsData = [];
  foreach($langs as $l) {
    $langsData[] = [
      'key' => $l->id(),
      'name' => ucfirst($l->id()),
      'fullName' => $l->name(),
      'href' => '/'.$l->path(),
      'isActive' => $l->id() === $lang->id(),
    ];
  }
  // meta
  $meta = (object) array(
    'pagetitle' => (string) $page->meta_title()->or($site->meta_title()),
    'description' => (string) $page->meta_description()->or($site->meta_description()),
    'keywords' => (string) $page->meta_keywords()->or($site->meta_keywords()),
    'image' => $page->og_image()->isNotEmpty() ? $page->og_image()->toFile()->url() : ($site->og_image()->isNotEmpty() ? $site->og_image()->toFile()->url() : ''),
    'searchable' => (bool) $site->searchable()->toBool() && $page->searchable()->toBool(),
  );
  // links
  $links = (object) array(
    'home' => '/'.$lang->path(),
    'privacyPolicy' => (string) $site->policy(),
  );
  // menu
  $menuData = [];
  $pages = $site->pages()->listed();
  foreach($pages as $key=>$p) {
    $href = $p->isHomePage() ? '' : (string) $p->uri();
    $menuData[] = [
      'key' => $key,
      'name' => (string) $p->title(),
      'href' => $lang->path().'/'.$href,
      'isActive' => $p->is($page),
      'isHighlighted' => false,
      'state' => $state->{(string) $p->state()->or('none')},
    ];
    if ((string) $p->template()->name() === 'events') {
      $links->events = $lang->path().'/'.$href;
    }
  }
  // socials
  $socials = $site->socials()->toStructure();
  $socialsData = [];
  if ($socials->isNotEmpty()) {
    foreach($socials as $key=>$s) {
      $socialsData[] = [
        'key' => $key,
        'name' => (string) $s->name(),
        'href' => (string) $s->url(),
      ];
    }
  }
  // breadcrumbs
  $breadcrumbs  = $site->breadcrumb();
  $breadcrumbsData = [];
  foreach($breadcrumbs as $key=>$breadcrumb) {
    $name = (string) $page->template()->name() === 'home' ? 'Home' : (string) $page->title();
    $href = Url::path($breadcrumb->url(), true) === '' ? '/' : Url::path($breadcrumb->url(), true);
    $breadcrumbsData[] = [
      'id' => $breadcrumb->uuid()->id(),
      'name' => $name,
      'href' => $href,
    ];
  }
  // cta
  $cta = $site->cta();
  $ctaData = null;
  if ($cta->isNotEmpty()) {
    $ctaObj = $cta->toObject();
    $ctaData = (object) [
      'href' => (string) $ctaObj->url(),
      'name' => (string) $ctaObj->name(),
    ];
  }
  $global = (object) array(
    'lang' => (string) $lang->id(),
    'dir' => (string) $lang->direction(),
    'meta' => $meta,
    'links' => $links,
    'languages' => $langsData,
    'menu' => $menuData,
    'breadcrumbs' => $breadcrumbsData,
    'social' => $socialsData,
    'cta' => $ctaData,
  );
  $data = (object) array(
    'global' => $global,
    'templateName' => templateName($page),
    'template' => (object) array()
  );
  return $data;
}

?>
