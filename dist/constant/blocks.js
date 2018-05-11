"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTROLS = {
    PAGING: 'paging',
    SEARCHING: 'searching',
    INFO: 'info',
    PROCESSING: 'processing',
    LENGTH_CHANGE: 'lengthChange',
    BUTTONS: 'buttons',
};
exports.BLOCKS_TEMPLATE_ALIAS = {
    [exports.CONTROLS.PAGING]: 'p',
    [exports.CONTROLS.SEARCHING]: 'f',
    [exports.CONTROLS.INFO]: 'i',
    [exports.CONTROLS.PROCESSING]: 'r',
    [exports.CONTROLS.LENGTH_CHANGE]: 'l',
    [exports.CONTROLS.BUTTONS]: 'B',
};
exports.DEFAULTS_BLOCKS_NAMES = {
    [exports.CONTROLS.PAGING]: 'bPaginate',
    [exports.CONTROLS.SEARCHING]: 'bFilter',
    [exports.CONTROLS.INFO]: 'bInfo',
    [exports.CONTROLS.PROCESSING]: 'bProcessing',
    [exports.CONTROLS.LENGTH_CHANGE]: 'bLengthChange',
    [exports.CONTROLS.BUTTONS]: 'bButtons',
};
var POSITION;
(function (POSITION) {
    POSITION["TOP"] = "t";
    POSITION["BOTTOM"] = "b";
    POSITION["LEFT"] = "l";
    POSITION["MIDDLE"] = "m";
    POSITION["RIGHT"] = "r";
    POSITION["AFTER"] = "a";
    POSITION["BEFORE"] = "b";
    POSITION["CENTER"] = "c";
})(POSITION = exports.POSITION || (exports.POSITION = {}));
exports.DEFAULT_BLOCK_POSITION = {
    [exports.CONTROLS.PAGING]: `${POSITION.BOTTOM}${POSITION.RIGHT}${POSITION.CENTER}`,
    [exports.CONTROLS.SEARCHING]: `${POSITION.TOP}${POSITION.RIGHT}${POSITION.CENTER}`,
    [exports.CONTROLS.INFO]: `${POSITION.BOTTOM}${POSITION.LEFT}${POSITION.CENTER}`,
    [exports.CONTROLS.LENGTH_CHANGE]: `${POSITION.TOP}${POSITION.LEFT}${POSITION.CENTER}`,
    [exports.CONTROLS.PROCESSING]: `${POSITION.CENTER}${POSITION.CENTER}${POSITION.CENTER}`,
    [exports.CONTROLS.BUTTONS]: `${POSITION.TOP}${POSITION.MIDDLE}`,
};
exports.DEFAULT_BLOCK_POSITION_BY_ALIAS = {
    [exports.BLOCKS_TEMPLATE_ALIAS[exports.CONTROLS.PAGING]]: exports.DEFAULT_BLOCK_POSITION[exports.CONTROLS.PAGING],
    [exports.BLOCKS_TEMPLATE_ALIAS[exports.CONTROLS.SEARCHING]]: exports.DEFAULT_BLOCK_POSITION[exports.CONTROLS.SEARCHING],
    [exports.BLOCKS_TEMPLATE_ALIAS[exports.CONTROLS.INFO]]: exports.DEFAULT_BLOCK_POSITION[exports.CONTROLS.INFO],
    [exports.BLOCKS_TEMPLATE_ALIAS[exports.CONTROLS.PROCESSING]]: exports.DEFAULT_BLOCK_POSITION[exports.CONTROLS.LENGTH_CHANGE],
    [exports.BLOCKS_TEMPLATE_ALIAS[exports.CONTROLS.LENGTH_CHANGE]]: exports.DEFAULT_BLOCK_POSITION[exports.CONTROLS.PROCESSING],
    [exports.BLOCKS_TEMPLATE_ALIAS[exports.CONTROLS.BUTTONS]]: exports.DEFAULT_BLOCK_POSITION[exports.CONTROLS.BUTTONS],
};
//# sourceMappingURL=blocks.js.map