function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { DataTableServerResponse } from './response';
export var Ajax =
/*#__PURE__*/
function () {
  function Ajax(table) {
    _classCallCheck(this, Ajax);

    _defineProperty(this, "data", void 0);

    _defineProperty(this, "table", void 0);

    this.data = {};
    this.table = table;
  }

  _createClass(Ajax, [{
    key: "options",
    value: function options() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.data = Object.assign(this.data, data);
      return this;
    }
  }, {
    key: "url",
    value: function url(value) {
      this.data.url = value;
      return this;
    }
  }, {
    key: "params",
    value: function params(value) {
      this.data.data = value;
      return this;
    }
  }, {
    key: "success",
    value: function success(value) {
      this.data.dataSrc = value;
      return this;
    }
  }, {
    key: "filter",
    value: function filter(fn) {
      var _this = this;

      this.data.dataFilter = function (data) {
        return fn(_this.createResponse(data), data);
      };

      return this;
    }
    /**
     * Only inited load
     */

  }, {
    key: "loading",
    value: function loading() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.table.set({
        ajax: Object.assign({}, this.data, data)
      });
    }
    /**
     * Always load from server (pagging and ather)
     */

  }, {
    key: "always",
    value: function always() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.table.set({
        serverSide: true,
        ajax: Object.assign({}, this.data, data)
      });
    }
  }, {
    key: "createResponse",
    value: function createResponse(data) {
      return new DataTableServerResponse(data);
    }
  }]);

  return Ajax;
}();