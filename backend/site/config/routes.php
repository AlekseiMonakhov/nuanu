<?php

use Kirby\Cms\Url;

return [
  [
    'pattern' => '(?:(^[A-Za-z]{2})//?)?home/(:any)',
    'action'  => function($lang, $uid) {
      go($lang);
    }
  ],
  [
    'pattern' => '(?:(^[A-Za-z]{2})//?)?home',
    'action'  => function($lang='') {
      go($lang);
    }
  ]
];
