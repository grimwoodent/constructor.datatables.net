function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var $ = require('jquery');

import { BLOCKS_TEMPLATE_ALIAS, DEFAULTS_BLOCKS_NAMES, DEFAULT_BLOCK_POSITION_BY_ALIAS } from '../../constant/blocks';
import { ToolbarElement } from '../toolbars/toolbar-element';
import { domTemplate } from './template';
export var DomConstructor =
/*#__PURE__*/
function () {
  function DomConstructor() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var toolbars = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, DomConstructor);

    _defineProperty(this, "positions", void 0);

    this.positions = {};
    var defaultsVars = $.fn.dataTable.defaults;
    Object.keys(BLOCKS_TEMPLATE_ALIAS).forEach(function (key) {
      var defaultKey = DEFAULTS_BLOCKS_NAMES[key];
      var paramKey = BLOCKS_TEMPLATE_ALIAS[key];
      var defaultsValue = defaultsVars[defaultKey];
      var keyValue = options[key] !== undefined ? options[key] : defaultsValue;

      if (keyValue) {
        var toolbar = toolbars.getControl(BLOCKS_TEMPLATE_ALIAS[key]);
        var defaultPosition = DEFAULT_BLOCK_POSITION_BY_ALIAS[paramKey];

        if (!toolbar) {
          toolbars.add(defaultPosition, new ToolbarElement({
            control: paramKey,
            position: defaultPosition
          }));
        }
      }
    });
    this.positions = toolbars.getReplaceBlocks() || {};
  }

  _createClass(DomConstructor, [{
    key: "get",
    value: function get() {
      return domTemplate.render({
        p: this.positions
      });
    }
  }]);

  return DomConstructor;
}();