function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export var Button =
/*#__PURE__*/
function () {
  function Button(manager) {
    _classCallCheck(this, Button);

    _defineProperty(this, "manager", void 0);

    this.manager = manager;
  }

  _createClass(Button, [{
    key: "add",
    value: function add() {
      return this.manager.add(this.get());
    }
  }, {
    key: "get",
    value: function get() {
      return null;
    }
  }]);

  return Button;
}();