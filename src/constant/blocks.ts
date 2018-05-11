export const CONTROLS = {
    PAGING: 'paging',
    SEARCHING: 'searching',
    INFO: 'info',
    PROCESSING: 'processing',
    LENGTH_CHANGE: 'lengthChange',
    BUTTONS: 'buttons',
};

export const BLOCKS_TEMPLATE_ALIAS = {
    [CONTROLS.PAGING]: 'p',
    [CONTROLS.SEARCHING]: 'f',
    [CONTROLS.INFO]: 'i',
    [CONTROLS.PROCESSING]: 'r',
    [CONTROLS.LENGTH_CHANGE]: 'l',
    [CONTROLS.BUTTONS]: 'B',
};

export const DEFAULTS_BLOCKS_NAMES = {
    [CONTROLS.PAGING]: 'bPaginate',
    [CONTROLS.SEARCHING]: 'bFilter',
    [CONTROLS.INFO]: 'bInfo',
    [CONTROLS.PROCESSING]: 'bProcessing',
    [CONTROLS.LENGTH_CHANGE]: 'bLengthChange',
    [CONTROLS.BUTTONS]: 'bButtons', // ?
};

export enum POSITION {
    TOP = 't',
    BOTTOM = 'b',

    LEFT = 'l',
    MIDDLE = 'm',
    RIGHT = 'r',

    AFTER = 'a',
    BEFORE = 'b',
    CENTER = 'c',
}

export const DEFAULT_BLOCK_POSITION = {
    [CONTROLS.PAGING]: `${POSITION.BOTTOM}${POSITION.RIGHT}${POSITION.CENTER}`,
    [CONTROLS.SEARCHING]: `${POSITION.TOP}${POSITION.RIGHT}${POSITION.CENTER}`,
    [CONTROLS.INFO]: `${POSITION.BOTTOM}${POSITION.LEFT}${POSITION.CENTER}`,
    [CONTROLS.LENGTH_CHANGE]: `${POSITION.TOP}${POSITION.LEFT}${POSITION.CENTER}`,
    [CONTROLS.PROCESSING]: `${POSITION.CENTER}${POSITION.CENTER}${POSITION.CENTER}`,
    [CONTROLS.BUTTONS]: `${POSITION.TOP}${POSITION.MIDDLE}`,
};

export const DEFAULT_BLOCK_POSITION_BY_ALIAS = {
    [BLOCKS_TEMPLATE_ALIAS[CONTROLS.PAGING]]: DEFAULT_BLOCK_POSITION[CONTROLS.PAGING],
    [BLOCKS_TEMPLATE_ALIAS[CONTROLS.SEARCHING]]: DEFAULT_BLOCK_POSITION[CONTROLS.SEARCHING],
    [BLOCKS_TEMPLATE_ALIAS[CONTROLS.INFO]]: DEFAULT_BLOCK_POSITION[CONTROLS.INFO],
    [BLOCKS_TEMPLATE_ALIAS[CONTROLS.PROCESSING]]: DEFAULT_BLOCK_POSITION[CONTROLS.LENGTH_CHANGE],
    [BLOCKS_TEMPLATE_ALIAS[CONTROLS.LENGTH_CHANGE]]: DEFAULT_BLOCK_POSITION[CONTROLS.PROCESSING],
    [BLOCKS_TEMPLATE_ALIAS[CONTROLS.BUTTONS]]: DEFAULT_BLOCK_POSITION[CONTROLS.BUTTONS],
};
