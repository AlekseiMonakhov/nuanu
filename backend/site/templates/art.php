<?php
require __DIR__  . '/utils/pageData.php';
require __DIR__  . '/utils/components.php';

$pageData = pageData($page);

$kirby->response()->json();
echo json_encode($pageData);
