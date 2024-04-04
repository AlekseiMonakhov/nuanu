<?php
require __DIR__  . '/utils/pageData.php';

$pageData = pageData($page);

$kirby->response()->json();
echo json_encode($pageData);
