const $ = require('jquery');
import {
    BLOCKS_TEMPLATE_ALIAS,
    DEFAULTS_BLOCKS_NAMES,
    DEFAULT_BLOCK_POSITION_BY_ALIAS,
} from '../../constant/blocks';
import { ToolbarElement } from '../toolbars/toolbar-element';
import { IDomConstructor, IDomConstructorOptions, IDomConstructorPositions } from './interface';
import { IToolbars } from '../toolbars/interface';
import { domTemplate } from './template';

export class DomConstructor implements IDomConstructor {
    protected positions: IDomConstructorPositions;

    constructor(options: IDomConstructorOptions = {}, toolbars: IToolbars) {
        this.positions = {};
        const defaultsVars: IDomConstructorOptions = $.fn.dataTable.defaults;

        Object.keys(BLOCKS_TEMPLATE_ALIAS).
            forEach(key => {
                const defaultKey = DEFAULTS_BLOCKS_NAMES[key];
                const paramKey = BLOCKS_TEMPLATE_ALIAS[key];
                const defaultsValue = defaultsVars[defaultKey];
                const keyValue = options[key] !== undefined ? options[key] : defaultsValue;

                if (keyValue) {
                    const toolbar = toolbars.getControl(BLOCKS_TEMPLATE_ALIAS[key]);
                    const defaultPosition = DEFAULT_BLOCK_POSITION_BY_ALIAS[paramKey];

                    if (!toolbar) {
                        toolbars.add(defaultPosition, new ToolbarElement({
                            control: paramKey,
                            position: defaultPosition,
                        }));
                    }
                }
            });

        this.positions = toolbars.getReplaceBlocks() || {};
    }

    public get(): string {
        return domTemplate.render({
            p: this.positions,
        }) as string;
    }
}
