import {
    CONTROLS,
    BLOCKS_TEMPLATE_ALIAS,
} from '../../constant/blocks';

export class Control {
    constructor(toolbar, table) {
        this.toolbar = toolbar;
        this._table = table;
    }

    set(value) {
        this.toolbar._editing.setControl(value);
        return this.toolbar;
    }

    get paging() {
        this._table.set({ paging: true });
        return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.PAGING]);
    }

    get searching() {
        this._table.set({ searching: true });
        return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.SEARCHING]);
    }

    get info() {
        this._table.set({ info: true });
        return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.INFO]);
    }

    get processing() {
        this._table.set({ processing: true });
        return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.PROCESSING]);
    }

    get lengthChange() {
        this._table.set({ lengthChange: true });
        return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.LENGTH_CHANGE]);
    }
}
