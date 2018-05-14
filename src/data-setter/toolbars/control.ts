import {
    CONTROLS,
    BLOCKS_TEMPLATE_ALIAS,
} from '../../constant/blocks';
import { IDataTable } from '../../interface';
import { IToolbarConstructor, IToolbarControl } from './interface';

export class Control implements IToolbarControl {
    protected toolbar: IToolbarConstructor;

    protected table: IDataTable;

    constructor(toolbar: IToolbarConstructor, table: IDataTable) {
        this.toolbar = toolbar;
        this.table = table;
    }

    public set(value: string): IToolbarConstructor {
        this.toolbar.getEditing().setControl(value);

        return this.toolbar;
    }

    public get paging(): IToolbarConstructor {
        this.table.set({ paging: true });

        return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.PAGING]);
    }

    public get searching(): IToolbarConstructor {
        this.table.set({ searching: true });

        return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.SEARCHING]);
    }

    public get info(): IToolbarConstructor {
        this.table.set({ info: true });

        return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.INFO]);
    }

    public get processing(): IToolbarConstructor {
        this.table.set({ processing: true });

        return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.PROCESSING]);
    }

    public get lengthChange(): IToolbarConstructor {
        this.table.set({ lengthChange: true });

        return this.set(BLOCKS_TEMPLATE_ALIAS[CONTROLS.LENGTH_CHANGE]);
    }
}
