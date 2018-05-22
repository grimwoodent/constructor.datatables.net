function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { CONTROLS, BLOCKS_TEMPLATE_ALIAS } from '../../constant/blocks';
export var Control =
/*#__PURE__*/
function () {
  function Control(toolbar, table) {
    _classCallCheck(this, Control);

    _defineProperty(this, "toolbar", void 0);

    _defineProperty(this, "table", void 0);

    this.toolbar = toolbar;
    this.table = table;
  }

  _createClass(Control, [{
    key: "set",
    value: function set(value) {
      this.toolbar.getEditing().setControl(value);
      return this.toolbar;
    }
  }, {
    key: "paging",
    get: function get() {
      this.table.set({
        paging: true
      });
      return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.PAGING]);
    }
  }, {
    key: "searching",
    get: function get() {
      this.table.set({
        searching: true
      });
      return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.SEARCHING]);
    }
  }, {
    key: "info",
    get: function get() {
      this.table.set({
        info: true
      });
      return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.INFO]);
    }
  }, {
    key: "processing",
    get: function get() {
      this.table.set({
        processing: true
      });
      return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.PROCESSING]);
    }
  }, {
    key: "lengthChange",
    get: function get() {
      this.table.set({
        lengthChange: true
      });
      return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.LENGTH_CHANGE]);
    }
  }]);

  return Control;
}();