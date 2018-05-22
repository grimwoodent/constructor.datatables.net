function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = require('jquery');

import { ToolbarElement } from './toolbar-element';
export var Toolbar =
/*#__PURE__*/
function () {
  function Toolbar() {
    _classCallCheck(this, Toolbar);

    _defineProperty(this, "html", null);

    _defineProperty(this, "control", null);

    _defineProperty(this, "element", null);

    _defineProperty(this, "position", {});

    _defineProperty(this, "events", []);
  }

  _createClass(Toolbar, [{
    key: "setPosition",
    value: function setPosition(tb, lr, ba) {
      this.position = {
        tb: tb || this.position.tb || null,
        lr: lr || this.position.lr || null,
        ba: ba || this.position.ba || null
      };
      return this;
    }
  }, {
    key: "isControl",
    value: function isControl() {
      return !!this.getControl();
    }
  }, {
    key: "getControl",
    value: function getControl() {
      return this.control;
    }
  }, {
    key: "setControl",
    value: function setControl(value) {
      this.control = value;
      return this;
    }
  }, {
    key: "setTemplate",
    value: function setTemplate(html) {
      this.html = html;
      return this;
    }
  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return typeof this.html === 'function' ? this.html() : this.html;
    }
  }, {
    key: "addEvent",
    value: function addEvent() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.events.push(args);
      return this;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return "".concat(this.position.tb || '').concat(this.position.lr || '').concat(this.position.ba || '');
    }
  }, {
    key: "getElement",
    value: function getElement() {
      if (this.element) {
        return this.element;
      }

      if (!this.isControl()) {
        var element = $(this.getTemplate());
        this.events.forEach(function (args) {
          element.on(args[0], args[1], args[2], args[3]);
        });
        this.element = new ToolbarElement({
          element: element,
          position: this.getPosition()
        });
      } else {
        this.element = new ToolbarElement({
          control: this.getControl(),
          position: this.getPosition()
        });
      }

      return this.element;
    }
  }]);

  return Toolbar;
}();