function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Button } from './abstract';

var ColumnToggleButton =
/*#__PURE__*/
function (_Button) {
  function ColumnToggleButton(manager) {
    var _this;

    _classCallCheck(this, ColumnToggleButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ColumnToggleButton).call(this, manager));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "columns", void 0);

    _this.columns = [];
    return _this;
  }

  _createClass(ColumnToggleButton, [{
    key: "setColumns",
    value: function setColumns(value) {
      this.columns = value;
      return this;
    }
  }, {
    key: "get",
    value: function get() {
      if (!this.columns || !this.columns.length) {
        return null;
      }

      return {
        extend: 'columnsToggle',
        columns: this.columns
      };
    }
  }]);

  _inherits(ColumnToggleButton, _Button);

  return ColumnToggleButton;
}(Button);

export { ColumnToggleButton as default };