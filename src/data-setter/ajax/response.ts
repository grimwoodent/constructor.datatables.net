
// Use for get total pages
import { IDataTableServerResponse, IResponseData } from './interface';

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

    public stringify(): string {
        return JSON.stringify(this.data);
    }
}
