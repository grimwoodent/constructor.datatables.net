function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = require('jquery');

export var Header =
/*#__PURE__*/
function () {
  function Header(table) {
    _classCallCheck(this, Header);

    _defineProperty(this, "table", void 0);

    _defineProperty(this, "headerData", void 0);

    this.table = table;
    this.headerData = {};
  }

  _createClass(Header, [{
    key: "add",
    value: function add(columnIdx, data) {
      this.headerData[columnIdx] = data;
      return this.table;
    }
  }, {
    key: "columns",
    value: function columns(idx) {
      if (!this.table.api) {
        throw new Error('Table does not ready');
      }

      return this.table.api.columns(idx).header();
    }
  }, {
    key: "column",
    value: function column(idx) {
      if (!this.table.api) {
        throw new Error('Table does not ready');
      }

      return this.table.api.column(idx).header();
    }
  }, {
    key: "apply",
    value: function apply() {
      var _this = this;

      if (this.table.isInited()) {
        throw new Error('Table already inited');
      }

      Object.keys(this.headerData).forEach(function (idx) {
        var data = _this.headerData[idx];

        var element = _this.column(idx);

        if (data.className) {
          $(element).addClass(data.className);
        }
      });
      return this.table;
    }
  }]);

  return Header;
}();