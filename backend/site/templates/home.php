<?php
require __DIR__  . '/utils/pageData.php';
require __DIR__  . '/utils/components.php';

$pageData = pageData($page);
// stories
$stories = $page->children()->listed()->filterBy('intendedTemplate', 'story-item');
$storiesData = storiesData($stories);
// inside
$inside = $page->inside()->toStructure();
$insideData = (object) [];
if ($page->inside()->isNotEmpty()) {
  foreach($inside as $key=>$item) {
    $insideStories = [];
    if ($item->stories()->isNotEmpty()) {
      foreach($item->stories()->toStructure() as $storyKey=>$iStory) {
        $insideStories[] = [
          'key' => $storyKey,
          'title' => (string) $iStory->title()->kt()->inline(),
          'media' => mediaData($iStory->img()),
        ];
      }
    }
    $insideData->items[] = [
      'key' => $key,
      'title' => (string) $item->title(),
      'stories' => $insideStories,
    ];
  }
}
// longRead
$longReadToggle = (bool) $page->long_read_toggle()->toBool();
$longRead = $page->long_read();
$longReadData = (object) [];
if ($longReadToggle) {
  $longReadData = null;
} else {
  $longReadData->title = (string) $page->long_read_title()->kt()->inline();
  if ($longRead->isNotEmpty()) {
    foreach($longRead->toStructure() as $key=>$item) {
      $longReadData->items[] = [
        'key' => $key,
        'label' => (string) $item->label(),
        'media' => mediaDataArray($item->imgs()),
      ];
    }
  }
}
// paragraphs
$paragraphPages = $page->children()->listed()->filterBy('intendedTemplate', 'paragraph-item');
$paragraphItems = [];
foreach($paragraphPages as $key=>$paragraph) {
  // factoids
  $paragraphsFactoids = $paragraph->factoids()->toStructure();
  $factoidsData = [];
  foreach($paragraphsFactoids as $fkey=>$factoid) {
    $factoidsData[] = [
      'key' => $fkey,
      'title' => (string) $factoid->title(),
      'description'  => (string) $factoid->description()->kt()->inline(),
    ];
  }
  // paragraph data
  $paragraphItems[] = [
    'key' => $paragraph->uuid()->id(),
    'title' => (string) $paragraph->title(),
    'description'  => (string) $paragraph->description(),
    'factoids' => $factoidsData,
    'media' => mediaData($paragraph->img()),
    'action' => buttonData($paragraph->button()),
  ];
}
$paragraphData = (object) array("items" => $paragraphItems);
// personTypes
$personTypes = $page->person_types();
$personTypesData = (object) [];
$personTypesData->title = (string) $page->person_types_title()->kt()->inline();
if ($personTypes->isNotEmpty()) {
  foreach($personTypes->toStructure() as $key=>$personType) {
    $personTypesData->items[] = [
      'key' => $key,
      'title' => (string) $personType->title(),
      'image' => mediaData($personType->img())->image,
      'description' => (string) $personType->description()->kt()->inline(),
    ];
  }
}
// template
$pageData->template = (object) array(
  'stories' => $storiesData,
  'inside' => $insideData,
  'longRead' => $longReadData,
  'paragraphs' => $paragraphData,
  'personTypes' => $personTypesData,
);

$kirby->response()->json();
echo json_encode($pageData);
