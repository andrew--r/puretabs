# pureTabs
Простые табы без зависимостей на чистом JavaScript.

Работает во всех современных браузерах (IE9+).

## Примеры использования
Простейший пример:

```html
<a class="puretabs puretabs--active" href="#first">Первая секция</a>
<a class="puretabs" href="#second">Вторая секция</a>

<div id="first">Содержимое первой секции</div>
<div id="second">Содержимое второй секции</div>

<script src="puretabs.js"></script>
<script>
  window.onload = function() {
    pureTabs.init();
  }
</script>
```

Ссылки и секции связаны идентификатором секции, который прописывается в атрибут `href` у ссылки. Каждая ссылка должна иметь общий класс (по умолчанию — `puretabs`). Чтобы задать секцию по умолчанию, следует добавить к ссылке на эту секцию класс `puretabs--active`.

### Пользовательские классы
Чтобы задать ссылкам пользовательские классы, достаточно при инициализации скрипта передать их в качестве параметров:

```javascript
var className = 'tab',              // Общий класс ссылок
    activeClassName = 'tab--active' // Класс активной ссылки

pureTabs.init(className, activeClassName);
```

### Несколько табов на странице
Если на странице требуется создать несколько блоков с табами, у ссылок в каждом из блоков должны быть разные общие классы.

```html
<div class="tabs tabs--first">
  <a class="puretabs puretabs--active" href="#first">Первая секция</a>
  <a class="puretabs" href="#second">Вторая секция</a>

  <div id="first">Содержимое первой секции</div>
  <div id="second">Содержимое второй секции</div>
</div>

<div class="tabs tabs--second">
  <a class="tabs tabs--active" href="#first">Секция 1</a>
  <a class="tabs" href="#second">Секция 2</a>

  <div id="one">Содержимое секции 1</div>
  <div id="two">Содержимое секции 2</div>
</div>

<script src="puretabs.js"></script>
<script>
  window.onload = function() {
    pureTabs.init();                        // Для .tabs--first
    pureTabs.init('tabs', 'tabs--active');  // Для .tabs--second
  }
</script>
```