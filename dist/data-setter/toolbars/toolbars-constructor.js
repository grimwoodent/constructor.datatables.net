function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { POSITION } from '../../constant/blocks';
import { Toolbar } from './toolbar';
import { Control } from './control';
export var ToolbarConstructor =
/*#__PURE__*/
function () {
  function ToolbarConstructor(table) {
    _classCallCheck(this, ToolbarConstructor);

    _defineProperty(this, "editing", void 0);

    _defineProperty(this, "table", void 0);

    this.editing = new Toolbar();
    this.table = table;
  }

  _createClass(ToolbarConstructor, [{
    key: "html",
    value: function html(value) {
      this.editing.setTemplate(value);
      return this;
    }
  }, {
    key: "on",
    value: function on() {
      var _this$editing;

      (_this$editing = this.editing).addEvent.apply(_this$editing, arguments);

      return this;
    }
  }, {
    key: "add",
    value: function add() {
      var element = this.editing.getElement();
      var position = this.editing.getPosition();
      this.table.toolbars.add(position, element);
      this.editing = new Toolbar();
      return this.table;
    }
  }, {
    key: "getEditing",
    value: function getEditing() {
      return this.editing;
    }
  }, {
    key: "top",
    get: function get() {
      this.editing.setPosition(POSITION.TOP, null, null);
      return this;
    }
  }, {
    key: "bottom",
    get: function get() {
      this.editing.setPosition(POSITION.BOTTOM, null, null);
      return this;
    }
  }, {
    key: "left",
    get: function get() {
      this.editing.setPosition(null, POSITION.LEFT, null);
      return this;
    }
  }, {
    key: "middle",
    get: function get() {
      this.editing.setPosition(null, POSITION.MIDDLE, null);
      return this;
    }
  }, {
    key: "right",
    get: function get() {
      this.editing.setPosition(null, POSITION.RIGHT, null);
      return this;
    }
  }, {
    key: "beforeControl",
    get: function get() {
      this.editing.setPosition(null, null, POSITION.BEFORE);
      return this;
    }
  }, {
    key: "onControl",
    get: function get() {
      this.editing.setPosition(null, null, POSITION.CENTER);
      return this;
    }
  }, {
    key: "afterControl",
    get: function get() {
      this.editing.setPosition(null, null, POSITION.AFTER);
      return this;
    }
  }, {
    key: "control",
    get: function get() {
      return new Control(this, this.table);
    }
  }, {
    key: "and",
    get: function get() {
      this.add();
      return this;
    }
  }]);

  return ToolbarConstructor;
}();