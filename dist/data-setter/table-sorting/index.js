function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = require('jquery');

export var TableSorting =
/*#__PURE__*/
function () {
  _createClass(TableSorting, null, [{
    key: "create",
    value: function create(name) {
      return new TableSorting(name);
    }
  }]);

  function TableSorting(name) {
    _classCallCheck(this, TableSorting);

    _defineProperty(this, "settings", {
      name: null,
      pre: null,
      asc: null,
      desc: null
    });

    this.settings.name = name;
  }

  _createClass(TableSorting, [{
    key: "pre",
    value: function pre(fn) {
      this.settings.pre = fn;
      return this;
    }
  }, {
    key: "asc",
    value: function asc(fn) {
      this.settings.asc = fn;
      return this;
    }
  }, {
    key: "desc",
    value: function desc(fn) {
      this.settings.desc = fn;
      return this;
    }
  }, {
    key: "add",
    value: function add() {
      var _$$extend;

      if (!this.settings.name) {
        throw new Error('Sorting "name" required');
      }

      if (!this.settings.pre) {
        throw new Error('Sorting "pre" function required');
      }

      if (!this.settings.asc) {
        throw new Error('Sorting "asc" function required');
      }

      if (!this.settings.desc) {
        throw new Error('Sorting "desc" function required');
      }

      $.extend($.fn.dataTableExt.oSort, (_$$extend = {}, _defineProperty(_$$extend, "".concat(this.settings.name, "-pre"), this.settings.pre), _defineProperty(_$$extend, "".concat(this.settings.name, "-asc"), this.settings.asc), _defineProperty(_$$extend, "".concat(this.settings.name, "-desc"), this.settings.desc), _$$extend));
    }
  }]);

  return TableSorting;
}();