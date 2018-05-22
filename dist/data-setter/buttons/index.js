function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons-bs';
import ColumnVisibleButton from './column-visible';
import ColumnToggleButton from './column-toggle';
export var Buttons =
/*#__PURE__*/
function () {
  function Buttons(table) {
    _classCallCheck(this, Buttons);

    _defineProperty(this, "table", void 0);

    _defineProperty(this, "buttons", void 0);

    this.table = table;
    this.buttons = [];
  }

  _createClass(Buttons, [{
    key: "add",
    value: function add(value) {
      if (value) {
        this.buttons.push(value);
      }

      return this.table;
    }
  }, {
    key: "get",
    value: function get() {
      return this.buttons;
    }
  }, {
    key: "columnVisible",
    get: function get() {
      return new ColumnVisibleButton(this);
    }
  }, {
    key: "columnToggle",
    get: function get() {
      return new ColumnToggleButton(this);
    }
  }]);

  return Buttons;
}();