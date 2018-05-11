import { Button } from './abstract';
import { IButton, IButtonForColumns, IButtons } from '../../interface';

export default class ColumnToggleButton extends Button implements IButtonForColumns {
    protected columns: any[];

    constructor(manager: IButtons) {
        super(manager);
        this.columns = [];
    }

    public setColumns(value: any[]): IButtonForColumns {
        this.columns = value;

        return this;
    }

    public get(): any {
        if (!this.columns || !this.columns.length) {
            return null;
        }

        return {
            extend: 'columnsToggle',
            columns: this.columns,
        };
    }
}
