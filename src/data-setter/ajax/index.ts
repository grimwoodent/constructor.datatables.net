import { DataTableServerResponse } from './response';
import { IDataTable } from '../../interface';
import { IAjax, IAjaxData, IAjaxOptions, TAjaxDataFilter, TAjaxDataSrc } from './interface';

export class Ajax implements IAjax {
    protected data: IAjaxOptions;

    protected table: IDataTable;

    protected Response  = DataTableServerResponse;

    constructor(table: IDataTable) {
        this.data = {};
        this.table = table;
    }

    public options(data: IAjaxOptions = {}): IAjax {
        this.data = Object.assign(this.data, data);

        return this;
    }

    public url(value: string): IAjax {
        this.data.url = value;

        return this;
    }

    public params(value: IAjaxData): IAjax {
        this.data.data = value;

        return this;
    }

    public success(value: TAjaxDataSrc): IAjax {
        this.data.dataSrc = value;

        return this;
    }

    public filter(fn: (...args: any[]) => any): IAjax {
        this.data.dataFilter = (data: any) => fn(new this.Response(data), data);

        return this;
    }

    /**
     * Only inited load
     */
    public loading(data: IAjaxOptions = {}): IDataTable {
        return this.table.set({
            ajax: Object.assign({}, this.data, data),
        });
    }

    /**
     * Always load from server (pagging and ather)
     */
    public always(data: IAjaxOptions = {}): IDataTable {
        return this.table.set({
            serverSide: true,
            ajax: Object.assign({}, this.data, data),
        });
    }
}
