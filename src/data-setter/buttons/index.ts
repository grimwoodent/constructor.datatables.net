import 'datatables.net-buttons';
import 'datatables.net-buttons/js/buttons.colVis';
import 'datatables.net-buttons-bs';
import ColumnVisibleButton from './column-visible';
import ColumnToggleButton from './column-toggle';
import { IButton, IButtonForColumns, IButtons, IDataTable } from '../../interface';

export class Buttons implements IButtons {
    protected table: IDataTable;

    protected buttons: IButton[];

    constructor(table: IDataTable) {
        this.table = table;
        this.buttons = [];
    }

    public get columnVisible(): IButtonForColumns {
        return new ColumnVisibleButton(this);
    }

    public get columnToggle(): IButtonForColumns {
        return new ColumnToggleButton(this);
    }

    public add(value: IButton): IDataTable {
        if (value) {
            this.buttons.push(value);
        }

        return this.table;
    }

    public get(): IButton[] {
        return this.buttons;
    }
}
