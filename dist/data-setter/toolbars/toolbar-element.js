function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export var ToolbarElement =
/*#__PURE__*/
function () {
  /**
   * Control name or alias
   */

  /**
   * position of control element
   */
  function ToolbarElement() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, ToolbarElement);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "control", void 0);

    _defineProperty(this, "position", void 0);

    this.element = data.element;
    this.control = data.control;
    this.position = data.position;
  }

  _createClass(ToolbarElement, [{
    key: "isElement",
    value: function isElement() {
      return !!this.element;
    }
  }, {
    key: "isControl",
    value: function isControl(value) {
      if (value !== undefined) {
        return this.getControl() === value;
      }

      return !!this.getControl();
    }
  }, {
    key: "getControl",
    value: function getControl() {
      return this.control;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return this.position;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.element;
    }
  }]);

  return ToolbarElement;
}();