<?php
require __DIR__  . '/utils/pageData.php';
require __DIR__  . '/utils/components.php';

$pageData = pageData($page);
$storiesArray = $page->children()->listed()->filterBy('intendedTemplate', 'story-item');
// events
$eventsArray = $page->children()->listed()->filterBy('intendedTemplate', 'event-item');
$eventsData = [];
foreach($eventsArray as $key=>$event) {
  $eventData = eventData($event);
  $eventsData[] = $eventData;
}

$pageData->template = (object) array(
  'stories' => storiesData($storiesArray),
  'items' => $eventsData,
  'bannerAdd' => (object) array(
    'title' => (string) $page->banner_add_title()->kti(),
    'href' => (string) $page->banner_add_href(),
    'image' => (object) array(
      'original' => (string) $page->banner_add_img()->toFile()->url(),
      'width' => 1284,
      'height' => 1056,
      'alt' => (string) $page->banner_add_img()->toFile()->alt(),
    )
  )
);

$kirby->response()->json();
echo json_encode($pageData);
