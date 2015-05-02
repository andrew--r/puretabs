# puretabs
Простые табы на чистом JavaScript.

Работает во всех современных браузерах (IE10+ из-за использования classList API).

## Пример

```html
<!-- HTML -->
<a class="link link--active" href="#first">first section</a>
<a class="link" href="#second">second section</a>

<div id="first">Content of the first section</div>
<div id="second">Content of the second section</div>
```

```javascript
// JavaScript
document.addEventListener('DOMContentLoaded', function() {
  pureTabs.init('link', 'link--active');
});
```