function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Use for get total pages
export var DataTableServerResponse =
/*#__PURE__*/
function () {
  function DataTableServerResponse(data) {
    _classCallCheck(this, DataTableServerResponse);

    _defineProperty(this, "data", void 0);

    try {
      this.data = JSON.parse(data);
    } catch (err) {
      console.error(err);
      this.data = {};
    }
  }

  _createClass(DataTableServerResponse, [{
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "setData",
    value: function setData(value) {
      this.data = value;
      return this;
    }
  }, {
    key: "stringify",
    value: function stringify() {
      return JSON.stringify(this.data);
    }
  }]);

  return DataTableServerResponse;
}();