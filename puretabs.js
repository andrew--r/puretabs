(function(exports) {

  var $ = document.querySelectorAll.bind(document);

  var toggle = function(e, hash, links, activeClassName) {
    var elem = document.getElementById(hash);

    $('[data-puretabs]')[0].style.display = 'none';
    $('[data-puretabs]')[0].removeAttribute('data-puretabs');

    $('.' + activeClassName)[0].classList.remove(activeClassName);
    e.currentTarget.classList.add(activeClassName);

    elem.setAttribute('data-puretabs', '');
    elem.style.display = 'block';
  };

  exports.pureTabs = {
    init: function(className, activeClassName) {

      var self = this,
          hashes = [],
          links = [].slice.call($('.' + className));

      links.forEach(function(item) {
        var hash = item.hash.substr(1);
        hashes.push(hash);

        item.addEventListener('click', function(e) {
          e.preventDefault();

          toggle(e, hash, links, activeClassName);
        });

        if (item.classList.contains(activeClassName)) {
          document.getElementById(hash).setAttribute('data-puretabs', '');
        }
      });

      hashes.forEach(function(item) {
        var elem = document.getElementById(item);

        if (!elem.attributes['data-puretabs']) {
          elem.style.display = 'none';
        }
      });

    }
  };

})(window);