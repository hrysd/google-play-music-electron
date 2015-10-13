'use strict';

const App           = require('app'),
      BrowserWindow = require('browser-window'),
      Menubar       = require('menubar'),
      path          = require('path');

Menubar({
  dir: __dirname,
  icon: path.join(__dirname, 'images', 'menubar_icon.png'),
  width: 980,
  height: 850
});
