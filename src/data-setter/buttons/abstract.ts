import { IDataTable } from '../../interface';
import { IButton, IButtons } from './interface';

export class Button implements IButton {
    protected manager: IButtons;

    constructor(manager: IButtons) {
        this.manager = manager;
    }

    public add(): IDataTable {
        return this.manager.add(this.get());
    }

    public get(): any {
        return null;
    }
}
