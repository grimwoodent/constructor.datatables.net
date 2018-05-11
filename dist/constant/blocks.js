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
exports.POSITION = {
    TOP: 't',
    BOTTOM: 'b',
    LEFT: 'l',
    MIDDLE: 'm',
    RIGHT: 'r',
    AFTER: 'a',
    BEFORE: 'b',
    CENTER: 'c',
};
exports.DEFAULT_BLOCK_POSITION = {
    [exports.CONTROLS.PAGING]: `${exports.POSITION.BOTTOM}${exports.POSITION.RIGHT}${exports.POSITION.CENTER}`,
    [exports.CONTROLS.SEARCHING]: `${exports.POSITION.TOP}${exports.POSITION.RIGHT}${exports.POSITION.CENTER}`,
    [exports.CONTROLS.INFO]: `${exports.POSITION.BOTTOM}${exports.POSITION.LEFT}${exports.POSITION.CENTER}`,
    [exports.CONTROLS.LENGTH_CHANGE]: `${exports.POSITION.TOP}${exports.POSITION.LEFT}${exports.POSITION.CENTER}`,
    [exports.CONTROLS.PROCESSING]: `${exports.POSITION.CENTER}${exports.POSITION.CENTER}${exports.POSITION.CENTER}`,
    [exports.CONTROLS.BUTTONS]: `${exports.POSITION.TOP}${exports.POSITION.MIDDLE}`,
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