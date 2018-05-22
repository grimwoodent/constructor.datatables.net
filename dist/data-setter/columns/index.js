function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = require('jquery');

export var Columns =
/*#__PURE__*/
function () {
  function Columns(column, table) {
    _classCallCheck(this, Columns);

    _defineProperty(this, "all", void 0);

    _defineProperty(this, "table", void 0);

    this.all = column ? [column] : [];
    this.table = table;
  }

  _createClass(Columns, [{
    key: "and",
    value: function and(data) {
      if (data) {
        this.all.push(data);
      }

      return this;
    }
  }, {
    key: "index",
    value: function index() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var indexData = Object.assign({
        title: '№',
        searchable: false,
        orderable: false,
        data: null,
        render: function render(d, t, f) {
          var meta = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var row = meta.row || 0;
          var settings = meta.settings || {};
          var ajaxData = settings.oAjaxData || {};
          var page = (ajaxData.page || 1) - 1;
          var perPage = settings._iDisplayLength || 0;
          return page * perPage + row + 1;
        }
      }, data);
      this.all.push(indexData);
      return this;
    }
  }, {
    key: "add",
    value: function add() {
      var _this = this;

      var hideable = [];
      var toggleable = [];
      this.all = this.all.map(function (el, idx) {
        var element = el;
        var createdCell = element.createdCell;

        element.createdCell = function cc(cell, cellData, rowData, rowIndex, colIndex) {
          var opts = element.cell || {};

          if (opts.className) {
            $(cell).addClass(opts.className);
          }

          if (createdCell) {
            createdCell.call(this, cell, cellData, rowData, rowIndex, colIndex);
          }
        };

        if (element.order) {
          _this.table.order(idx, element.order);
        }

        if (element.hideable) {
          hideable.push(idx);
        }

        if (element.toggleable) {
          toggleable.push(idx);
        }

        if (element.header) {
          _this.table.header.add(idx, element.header);
        }

        return element;
      });

      if (hideable.length) {
        this.table.buttons.columnVisible.setColumns(hideable).add();
      }

      if (toggleable.length) {
        this.table.buttons.columnToggle.setColumns(toggleable).add();
      }

      return this.table.set({
        columns: this.all
      });
    }
  }]);

  return Columns;
}();