function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = require('jquery');

export var Toolbars =
/*#__PURE__*/
function () {
  function Toolbars() {
    _classCallCheck(this, Toolbars);

    _defineProperty(this, "all", {});
  }

  _createClass(Toolbars, [{
    key: "add",
    value: function add(position, element) {
      if (this.all[position]) {
        console.warn('Replace toolbar', this.all[position], 'by', element);
      }

      this.all[position] = element || null;
      return this;
    }
  }, {
    key: "getControl",
    value: function getControl(alias) {
      var _this = this;

      var cKey = Object.keys(this.all).find(function (key) {
        var toolbar = _this.all[key];
        return toolbar.isControl() && toolbar.isControl(alias);
      });
      return cKey ? this.all[cKey] : null;
    }
  }, {
    key: "getReplaceBlocks",
    value: function getReplaceBlocks() {
      var _this2 = this;

      var result = {};
      Object.keys(this.all).forEach(function (key) {
        var toolbar = _this2.all[key];

        if (toolbar.isControl()) {
          result[toolbar.getPosition()] = toolbar.getControl();
        } else {
          result[toolbar.getPosition()] = "<'js-table-toolbar-".concat(toolbar.getPosition(), "'>");
        }
      });
      return result;
    }
  }, {
    key: "replaceAllIn",
    value: function replaceAllIn(element) {
      var _this3 = this;

      var $element = $(element);
      Object.keys(this.all).forEach(function (key) {
        var toolbar = _this3.all[key];
        var container = $element.find(".js-table-toolbar-".concat(toolbar.getPosition()));
        container.replaceWith(toolbar.getElement());
      });
      return this;
    }
  }]);

  return Toolbars;
}();