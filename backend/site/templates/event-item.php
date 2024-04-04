<?php
require __DIR__  . '/utils/pageData.php';
require __DIR__  . '/utils/components.php';

$pageData = pageData($page);

$eventData = eventData($page);
// richContent
if ($page->blocks()->isNotEmpty()) {
  $richContent = [];
  $index = 0;
  foreach($page->blocks()->toBlocks() as $block) {
    if ($block->type() === 'poster') {
      $richContent[] = (object) [
        'key' => $index,
        'kind' => $block->type(),
        'original' => (string) $block->image()->toFile()->url(),
        'width' => (string) $block->image()->toFile()->width(),
        'height' => (string) $block->image()->toFile()->height(),
        'alt' => (string) $block->image()->toFile()->alt(),
      ];
    } elseif ($block->type() === 'text') {
      $richContent[] = (object) [
        'key' => $index,
        'kind' => $block->type(),
        'text' => (string) $block->content()->text()->kt(),
      ];
    } else {
      $richContent[] = (object) [
        'key' => $index,
        'kind' => $block->type(),
        'id' => (string) $block->contentid(),
      ];
    }
    array_push($eventData->richContent, $richContent[$index]);
    $index++;
  }
  $eventData->richContent = $richContent;
}

$pageData->template = $eventData;
$kirby->response()->json();
echo json_encode($pageData);
