<?php

$main = $page->main()->toStructure()->map(function ($item) {
  return [
    'title' => $item->title()->value()
  ];
})->first();

$galleryTitle = $page->galleryTitle()->toStructure()->map(function ($item) {
  return [
    'title' => $item->title()->value()
  ];
})->first();

$gallery = $page->gallery()->toStructure()->map(function ($item) {
  return [
    'src' => $item->src()->toFile() ? $item->src()->toFile()->url() : null,
    'title' => $item->title()->value(),
    'subtitle' => $item->subtitle()->value()
  ];
});

$swiperTitle = $page->swiperTitle()->toStructure()->map(function ($item) {
  return [
    'title' => $item->title()->value()
  ];
})->first();

$swiperItems = $page->swiperItems()->toStructure()->map(function ($item) {
  return [
    'src' => $item->src()->toFile() ? $item->src()->toFile()->url() : null,
    'title' => $item->title()->value(),
    'city' => $item->city()->value(),
    'area' => $item->area()->value(),
    'villas' => $item->villas()->value(),
    'apartments' => $item->apartments()->value()
  ];
});

$infographicsTitle = $page->infographicsTitle()->toStructure()->map(function ($item) {
  return [
    'title' => $item->title()->value()
  ];
})->first();

$infographicsCard = $page->infographicsCard()->toStructure()->map(function ($item) {
  return [
    'value' => $item->value()->value(),
    'label' => $item->label()->value()
  ];
})->values();

$infographics = $page->infographics()->toStructure()->map(function ($item) use ($infographicsCard) {
  return [
    'src' => $item->src()->toFile() ? $item->src()->toFile()->url() : null,
    'title' => $item->title()->value(),
    'subtitle' => $item->subtitle()->value()
  ];
});

$propertiesTitle = $page->propertiesTitle()->toStructure()->map(function ($item) {
  return [
    'title' => $item->title()->value()
  ];
})->first();

$properties = $page->properties()->toStructure()->map(function ($property) {
  return [
    'name' => $property->name()->value(),
    'title' => $property->title()->value(),
    'villas' => $property->villas()->value(),
    'apartments' => $property->apartments()->value(),
    'startingPrice' => $property->startingPrice()->value(),
    'totalArea' => $property->totalArea()->value(),
    'roomSizes' => $property->roomSizes()->toStructure()->map(function ($size) {
      return $size->size()->value();
    })->values(),
    'roi' => $property->roi()->value(),
    'occupancy' => $property->occupancy()->value(),
    'delivery' => $property->delivery()->value(),
    'image' => $property->image()->toFile() ? $property->image()->toFile()->url() : null
  ];
});

$reviewTitle = $page->reviewTitle()->toStructure()->map(function ($item) {
  return [
    'title' => $item->title()->value()
  ];
})->first();

$review = $page->review()->toStructure()->map(function ($item) {
  return [
    'source' => $item->source()->value(),
    'review' => $item->review()->value(),
    'date' => $item->date()->value()
  ];
});

$callbackFormTitle = $page->callbackFormTitle()->toStructure()->map(function ($item) {
  return [
    'title' => $item->title()->value(),
    'subtitle' => $item->subtitle()->value()
  ];
})->first();

$callBackRequestForm = $page->callBackRequestForm()->toStructure()->map(function ($item) {
  return [
    'whatsapp' => $item->whatsapp()->value(),
    'phone' => $item->phone()->value(),
    'src' => $item->src()->toFile() ? $item->src()->toFile()->url() : null
  ];
});

echo json_encode([
  'main' => $main,
  'galleryTitle' => $galleryTitle,
  'gallery' => $gallery,
  'swiperTitle' => $swiperTitle,
  'swiperItems' => $swiperItems,
  'infographicsCard' => $infographicsCard,
  'infographics' => $infographics,
  'propertiesTitle' => $propertiesTitle,
  'properties' => $properties,
  'reviewTitle' => $reviewTitle,
  'review' => $review,
  'callbackFormTitle' => $callbackFormTitle,
  'callBackRequestForm' => $callBackRequestForm
]);
