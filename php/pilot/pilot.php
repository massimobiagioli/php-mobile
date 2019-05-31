<?php

class Pilot {

  private $nameform;

  public function __construct() {
    $this->nameform = 'pilot';
  }

  public function parseEvent($request) {
    switch ($request['event']) {
      case 'onClick':
        switch ($request['id']) {
          case $this->nameform . '_btnShow':
            Out::show($this->nameform . '_divTest');  
            break;
          case $this->nameform . '_btnHide':
            Out::hide($this->nameform . '_divTest');
            break;
        }
        break;
    }
  }  

}