ng-color-pick
=============

A straight up Angular color picker. No jQuery/Bootstrap dependencies.

![Preview](http://i.imgur.com/UTeRvg3.png)

# Example

```html
  <script src='./ng-picky.js'></script>
  <script src='./ng-picky.css'></script>
  ...
  <div class='preview' style='background:{{color | toHex}};'></div>
  <picker color='color'></picker>
```

```js
  angular.module('myApp', ['ngPicky]
```

# Installation

### Bower

```
bower install ng-picky
```

### NPM

```
npm install ng-picky
```

# Usage

The picker directive will assign color values to whatever is passed into
the color attribute. These values will take the form of color objects.

The color objects can then be converted into a range of different formats

```
color.toRGB();
color.toHSL();
color.toHex();
color.toUnprefixedHex();
```

Or with one of the filters

```
{{ color | toRGB }}
{{ color | toHSL }}
{{ color | toHex }}
{{ color | toUnprefixedHex }}
```

Calling the internal method will be faster than the filters in most cases,
as the dirty checking won't need to call the function twice.


