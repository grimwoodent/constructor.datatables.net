interface IResponseData {
    [key: string]: any;
}

interface IDataTableServerResponse {

}

// Use for get total pages
export class DataTableServerResponse implements IDataTableServerResponse {
    protected data: IResponseData;

    constructor(data: any) {
        try {
            this.data = JSON.parse(data) as IResponseData;
        } catch (err) {
            console.error(err);

            this.data = {};
        }
    }

    public getData(): IResponseData {
        return this.data;
    }

    public setData(value: IResponseData): IDataTableServerResponse {
        this.data = value;

        return this;
    }

    // public error(value) {
    //     this.data.error = value;
    //
    //     return this;
    // }
    //
    // public total(value) {
    //     this._data.recordsTotal = value;
    //     this._data.recordsFiltered = value;
    //
    //     return this;
    // }
    //
    // public result(value, dataSrc = 'data') {
    //     this._data[dataSrc] = value;
    //
    //     return this;
    // }

    public stringify() {
        return JSON.stringify(this.data);
    }
}
