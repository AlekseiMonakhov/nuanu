<?php

function mediaFileData($media) {
  if ($media->type() === 'image') {
    return (object) [
      'image' => (object) [
        'original' => (string) $media->url(),
        'width' => (int) $media->width(),
        'height' => (int) $media->height(),
        'alt' => (string) $media->alt(),
      ],
      'video' => null,
    ];
  }
  if ($media->type() === 'video') {
    return (object) [
      'image' => null,
      'video' => (string) $media->url(),
    ];
  }
  return (object) [
    'image' => null,
    'video' => null,
  ];
}

function mediaData($file) {
  if ($media = $file->toFile()) {
    return mediaFileData($media);
  }
  return null;
}

function mediaDataArray($files) {
  $array = [];
  if ($files->isNotEmpty()) {
    $filesData = $files->toFiles();
    foreach ($filesData as $key=>$file) {
      $array[] = mediaFileData($file);
    }
  }
  return $array;
}

function buttonData($button) {
  $buttonObj = $button->toObject();
  if ($button->isNotEmpty()) {
    $type = (string) $buttonObj->type();
    $sup = (bool) $buttonObj->sup()->isNotEmpty() ? (string) $buttonObj->sup() : null;
    $buttonData = (object) [
      'kind' => $type,
      'text' => (string) $buttonObj->text(),
      'sup' => $sup,
    ];
    if ($type === 'link') {
      $buttonData->href = (string) $buttonObj->href();
      $buttonData->target = ($buttonObj->target()->toBool()) ? "_blank" : null;
    }
    if ($type === 'video_modal') {
      $buttonData->duration = (string) $buttonObj->duration();
      $videoType = (string) $buttonObj->video_type();
      if ($videoType === 'file') {
        $buttonData->player = (object) [
          'source' => (string) $buttonObj->modal_file()->toFile()->extension(),
          'src' => (string) $buttonObj->modal_file()->toFile()->url(),
          'id' => '',
        ];
      }
      else if ($videoType === 'youtube') {
        $buttonData->player = (object) [
          'source' => 'yt',
          'src' => '',
          'id' => (string) $buttonObj->modal_yt(),
        ];
      } else  {
        $buttonData->player = null;
      }
    }
    return $buttonData;
  }
  return null;
}

function storiesData($storiesArray) {
  $storiesData = (object) [];
  foreach($storiesArray as $key=>$story) {
    $storiesData->items[] = [
      'key' => $story->uuid()->id(),
      'title' => (string) $story->title(),
      'description'  => (string) $story->description(),
      'label' => (string) $story->label(),
      'media' => mediaData($story->img()),
      'theme' => (string) $story->theme(),
      'action' => buttonData($story->button()),
    ];
  }
  return $storiesData;
}

function eventData($event) {
  $tags = [];
  if ($event->tags()->isNotEmpty()) {
    foreach($event->tags()->split() as $tag) {
      $tags[] = (string) $tag;
    }
  }
  $img = null;
  $imgFile = $event->img()->toFile();
  if ($imgFile) {
    $img = (object) [
      'original' => (string) $imgFile->url(),
      'width' => (int) $imgFile->width(),
      'height' => (int) $imgFile->height(),
      'alt' => (string) $imgFile->alt(),
    ];
  }
  $location = null;
  if ($event->location()->isNotEmpty()) {
    $locationObj = $event->location()->toObject();
    $location = (object) array(
      'name' => (string) $locationObj->name(),
      'address' => (string) $locationObj->address(),
      'lat' => (float) $locationObj->lat()->value(),
      'lng' => (float) $locationObj->lng()->value(),
    );
  }
  $organizer = null;
  if ($event->organizer()->isNotEmpty()) {
    $organizerObj = $event->organizer()->toObject();
    $organizer = (object) array(
      'name' => (string) $organizerObj->name(),
      'href' => (string) $organizerObj->url(),
    );
  }
  $price = (bool) $event->price()->isNotEmpty() ? (string) $event->price() : "0";
  $endTime = $event->end_time()->isNotEmpty() ? date_create($event->end_time()->value())->format('Y-m-d\TH:i:s') : null;
  $eventData = (object) array(
    'key' => $event->uuid()->value(),
    'href' => $event->uri(),
    'image' => $img,
    'startTime' => date_create($event->start_time()->value())->format('Y-m-d\TH:i:s'),
    'endTime' => $endTime,
    'type' => $event->type()->value(),
    'tags' => $tags,
    'title' => $event->title()->value(),
    'minAge' => $event->min_age()->value(),
    'price' => $price,
    'location' => $location,
    'organizer' => $organizer,
    'buyHref' => $event->buy_href()->value(),
    'richContent' => [],
  );
  return $eventData;
}

?>
