function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = require('jquery');

import { Define } from 'grim.lib';
import 'datatables.net';
import 'datatables.net-bs';
import 'datatables.net-buttons';
import 'datatables.net-buttons-bs';
import 'datatables.net-select';
import 'datatables.net-select-bs/css/select.bootstrap.css';
import { CONSTANT_LANG_RU } from './constant/language.ru';
import { EVENTS as CONSTANT_EVENTS } from './constant/events';
import { ORDER as CONSTANT_ORDER } from './constant/order';
import { Columns } from './data-setter/columns';
import { Buttons } from './data-setter/buttons/index';
import { Toolbars } from './data-setter/toolbars/toolbars-collection';
import { ToolbarConstructor } from './data-setter/toolbars/toolbars-constructor';
import { Header } from './data-setter/header/index';
import { Ajax } from './data-setter/ajax/index';
import { DomConstructor } from './data-setter/dom-constructor/index';
import { TableSorting } from './data-setter/table-sorting';
var BaseDataTable = $.fn.dataTable; // disable alerts

BaseDataTable.ext.errMode = function (settings, tn, msg) {
  console.error('DataTable error for settings', settings);
  throw new Error(msg);
};

export var DataTableSorting = TableSorting;
export var EVENT = CONSTANT_EVENTS;
export var ORDER = CONSTANT_ORDER;
export var LANG = CONSTANT_LANG_RU;
export var DataTable =
/*#__PURE__*/
function () {
  _createClass(DataTable, null, [{
    key: "create",
    value: function create(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new this(element, options);
    }
  }]);

  function DataTable(element) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, DataTable);

    _defineProperty(this, "api", void 0);

    _defineProperty(this, "element", void 0);

    _defineProperty(this, "options", {});

    _defineProperty(this, "domConstructor", void 0);

    this.element = element;
    this.options = Object.assign({
      destroy: true,
      language: Object.assign(options.language || {}, this.constructor.LANG)
    }, options);
  }
  /**
   * Toolbars info storage
   *
   * @return {IToolbars}
   */


  _createClass(DataTable, [{
    key: "isInited",
    value: function isInited() {
      return !!this.inited;
    }
  }, {
    key: "column",
    value: function column(data) {
      return new Columns(data, this);
    }
    /**
     * Define columns
     *
     * @param datas
     *
     * @return {DataTable}
     */

  }, {
    key: "columns",
    value: function columns() {
      var datas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var columns = new Columns(null, this);
      datas.forEach(function (data) {
        return columns.and(data);
      });
      return columns.add();
    }
  }, {
    key: "set",
    value: function set(options) {
      this.options = Object.assign(this.options, options);
      return this;
    }
  }, {
    key: "init",
    value: function init() {
      if (this.isInited()) {
        console.warn('Data table already inited');
        return this;
      }

      var buttons = (this.options.buttons || []).concat(this.buttons.get());
      this.options.buttons = buttons.length ? buttons : undefined;

      if (!this.options.dom) {
        this.domConstructor = new DomConstructor(this.options, this.toolbars);
        this.options.dom = this.domConstructor.get();
      }

      var dataTable = this.element.dataTable(Object.assign({}, this.options));
      var api = dataTable.api();
      Define.property(this, 'api', api).readonly().var();
      this.toolbars.replaceAllIn(this.api.table().container());
      this.header.apply();
      Define.property(this, 'inited', true).readonly().var();
      return this;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (!this.isInited()) {
        return this;
      }

      this.api.destroy();
      delete this.api;
      delete this.inited;
      return this;
    }
  }, {
    key: "order",
    value: function order(column, _order) {
      this.set({
        order: [[column, _order]]
      });
      return this;
    }
  }, {
    key: "language",
    value: function language(value) {
      return this.set({
        language: Object.assign(this.options.language, value)
      });
    }
  }, {
    key: "data",
    value: function data(value) {
      if (this.api) {
        this.api.rows().remove();
        this.api.rows.add(value);
        this.api.draw();
      }

      return this.set({
        data: value
      });
    }
  }, {
    key: "on",
    value: function on(name) {
      this.element.on(name, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2], arguments.length <= 3 ? undefined : arguments[3]);
      return this;
    }
  }, {
    key: "paging",
    value: function paging(value) {
      return this.set({
        paging: value
      });
    }
  }, {
    key: "searching",
    value: function searching(value) {
      return this.set({
        searching: value
      });
    }
  }, {
    key: "info",
    value: function info(value) {
      return this.set({
        info: value
      });
    }
  }, {
    key: "autoWidth",
    value: function autoWidth(value) {
      return this.set({
        autoWidth: value
      });
    }
  }, {
    key: "lengthChange",
    value: function lengthChange(value) {
      return this.set({
        lengthChange: value
      });
    }
  }, {
    key: "processing",
    value: function processing(value) {
      return this.set({
        processing: value
      });
    }
  }, {
    key: "ordering",
    value: function ordering(value) {
      return this.set({
        ordering: value
      });
    }
  }, {
    key: "pageLength",
    value: function pageLength(value) {
      return this.set({
        pageLength: value
      });
    }
  }, {
    key: "startFrom",
    value: function startFrom(value) {
      return this.set({
        displayStart: value
      });
    }
  }, {
    key: "columnDefs",
    value: function columnDefs(value) {
      return this.set({
        columnDefs: value
      });
    }
  }, {
    key: "getConfigurators",
    value: function getConfigurators() {
      return this.constructor.configurators;
    }
  }, {
    key: "toolbars",
    get: function get() {
      var configurators = this.getConfigurators();
      var instance = new configurators.Toolbars(this);
      return Define.property(this, 'toolbars', instance).var();
    }
    /**
     * Buttons info storage
     *
     * @return {IButtons}
     */

  }, {
    key: "buttons",
    get: function get() {
      var configurators = this.getConfigurators();
      var instance = new configurators.Buttons(this);
      return Define.property(this, 'buttons', instance).var();
    }
    /**
     * Header info storage
     *
     * @return {IHeader}
     */

  }, {
    key: "header",
    get: function get() {
      var configurators = this.getConfigurators();
      var instance = new configurators.Header(this);
      return Define.property(this, 'header', instance).var();
    }
  }, {
    key: "toolbar",
    get: function get() {
      var configurators = this.getConfigurators();
      return new configurators.Toolbar(this);
    }
  }, {
    key: "ajax",
    get: function get() {
      var configurators = this.getConfigurators();
      return new configurators.Ajax(this);
    }
  }]);

  return DataTable;
}();

_defineProperty(DataTable, "EVENT", EVENT);

_defineProperty(DataTable, "ORDER", ORDER);

_defineProperty(DataTable, "LANG", LANG);

_defineProperty(DataTable, "configurators", {
  Toolbars: Toolbars,
  Buttons: Buttons,
  Header: Header,
  Toolbar: ToolbarConstructor,
  Ajax: Ajax
});