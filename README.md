# gitbook-plugin-jsbin

[![Dependency Status](https://david-dm.org/mikeumus/gitbook-plugin-jsbin.svg)](https://david-dm.org/LingyuCoder/gitbook-plugin-codepen)
[![devDependency Status](https://david-dm.org/mikeumus/gitbook-plugin-jsbin/dev-status.svg)](https://david-dm.org/LingyuCoder/gitbook-plugin-codepen#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/gitbook-plugin-jsbin.svg?style=flat-square)](http://npmjs.org/package/gitbook-plugin-codepen)
[![node](https://img.shields.io/badge/node.js-%3E=_0.12-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/gitbook-plugin-jsbin.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/gitbook-plugin-jsbin.svg?style=flat-square)](https://npmjs.org/package/gitbook-plugin-codepen)

Forked from [github.com/ly-tools/gitbook-plugin-codepen](https://github.com/ly-tools/gitbook-plugin-codepen)

**Embed JS Bin preview into your Gitbook.**

<!--[DEMO](http://read.lingyu.wang/Codepen.html)-->

## Install

```shell
$npm install --save gitbook-plugin-jsbin
```

## Usage

Add the plugin to your `book.json` like this:

```javascript
{
    "plugins": ["jsbin"]
}
```

then in your markdown file, you can embed jsbin panel like this:

```markdown
[](jsbin://AsFJh/1/embed?jsTab=js,&consoleTab=console)
```

## Options

You can set the options of your Gitbook in `book.json` like this:

```javascript
"pluginsConfig": {
    "jsbin": {
      "snapshot": 1,
      "htmlTab": 'html,', 
      "cssTab": 'css,', 
      "jsTab": 'js,',
      "consoleTab": 'console,',
      "outputTab": 'output' 
    }
}
```

You can also set options of a specific JS Bin panel use URL querystring like `1/embed?htmlTab=html,&cssTab=css,&jsTab=js,&consoleTab=console,&outputTab=output`

### snapshot

snapshot: `1`

### htmlTab

htmlTab: `'html',`

### cssTab

cssTab: `'css,'`

### jsTab

jsTab: `'js,'`

### consoleTab

consoleTab: `'console,'`

### outputTab

outputTab: `'output,'`


##License

The MIT License (MIT)

Copyright (c) 2016 Michael Duane Mooring

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
