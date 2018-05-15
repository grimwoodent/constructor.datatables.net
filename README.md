## DataTable.net configurator

### Methods

#### api: DataTables.Api;

    Link for DataTables api. (Allowed only after init).

#### toolbars: IToolbars;

    Toolbars configurator.

#### buttons: IButtons;

    Buttons configurator.

#### header: IHeader;

    Columns header configurator.

#### toolbar: IToolbarConstructor;

    Control elements configurator.

#### ajax: IAjax;

    Load data from server configurator.

#### isInited(): boolean;

    Is dataTable inted.

#### set(options: IDataTableOptions): IDataTable;

    Set DataTables Settings

#### init(): IDataTable;

    Init table

#### destroy(): IDataTable;

    Destroy table

#### column(data?: IColumnOptions): IColumns;

    Create new column configurator

#### columns(datas: IColumnOptions[]): IDataTable;

    Add columns by data.

#### order(column: number, order: ORDER): IDataTable;

    Set order for columns. Equals DataTables Setting "order".

#### language(value: IDataTableLanguage): IDataTable;

    Language settings. Equals DataTables Setting "language".

#### data(value: any[]): IDataTable;

    Set dataTable data for rows. Update data for inited table.

#### on(name: string, ...args: any[]): IDataTable;

    Add event for table.

#### paging(value: boolean): IDataTable;

    Enable paging control. Equals DataTable Setting "paging".

#### searching(value: boolean): IDataTable;

    Enable searching control. Equals DataTable Setting "searching".

#### info(value: boolean): IDataTable;

    Enable info control. Equals DataTable Setting "info".

#### autoWidth(value: boolean): IDataTable;

    Enable auto width for table. Equals DataTable Setting "autoWidth".

#### lengthChange(value: boolean): IDataTable;

    Enable page size control. Equals DataTable Setting "lengthChange".

#### processing(value: boolean): IDataTable;

    Enable loading indicator. Equals DataTable Setting "processing".

#### ordering(value: boolean): IDataTable;

    Enable ordering for columns. Equals DataTable Setting "ordering".

#### pageLength(value: number): IDataTable;

    Set page size. Equals DataTable Setting "pageLength".

#### startFrom(value: number): IDataTable;

    Set start element for paging. Equals DataTable Setting "displayStart".

#### columnDefs(value: any): IDataTable;

    Def column data. Equals DataTable Setting "columnDefs".

### Examples

#### 1. Basic initialization

``` javascript
import { DataTable } from 'constructor.datatables.net';

DataTable.create($('table'))
    .data([])
    .init();
```

#### 2. Columns settings

``` javascript
import { DataTable } from 'constructor.datatables.net';

DataTable.create($('table'))
    .column({ title: '#1', width: '100px', data: null })
       .and({ title: '#3', ordering: false, data: 'data_name' })
       .and({ title: '#4', render: (data) => data.name, data: null })
       .add()
    .set({
        order: [[1, 'desc']],
    })
    .init();
```

or

``` javascript
import { DataTable } from 'constructor.datatables.net';

DataTable.create($('table'))
    .columns([
        { title: '#1', width: '100px', data: null },
        { title: '#3', ordering: false, data: 'data_name' },
        { title: '#4', render: (data) => data.name, data: null },
    ])
    .set({
        order: [[1, 'desc']],
    })
    .init();
```

#### 3. Control elements

##### 3.2 Disable basic controls

``` javascript
import { DataTable } from 'constructor.datatables.net';

DataTable.create($('table'))
    .paging(false)
    .searching(false)
    .info(false)
    .autoWidth(false)
    .init();
```

or

``` javascript
import { DataTable } from 'constructor.datatables.net';

DataTable.create($('table'))
    .set({
        paging: false,
        searching: false,
        info: false,
        autoWidth: false,
    })
    .init();
```

##### 3.2 Add basic controls to position

``` javascript
import { DataTable } from 'constructor.datatables.net';

DataTable.create($('table'))
    .toolbar
        .bottom.right.afterControl.control.processing
        .and.top.left.onControl.control.info
        .add()
    .init();
```

Basic controls list

``` javascript
    paging
    searching
    info
    processing
    lengthChange
```

Positions list

``` javascript
    top
    bottom

    left
    right

    beforeControl
    onControl
    afterControl
```

##### 3.3 Create custom controls

``` javascript
import { DataTable } from 'constructor.datatables.net';

DataTable.create($('table'))
    .toolbar.top.left.beforeControl
        .html(`<div>
            <div class="js-a btn btn-default">A</div>
            <div class="js-b btn btn-default">B</div>
        </div>`)
        .on('click', '.js-a', () => { alert('A'); })
        .on('click', '.js-b', () => { alert('B'); })
        .add()
    .init();
```

#### 4. Ajax loading

##### 4.1 Initial loading

``` javascript
import { DataTable } from 'constructor.datatables.net';

DataTable.create($('table'))
    .ajax.url('/get/data/url').loading()
    .init();
```

##### 4.2 Reload data from server

``` javascript
import { DataTable } from 'constructor.datatables.net';

    DataTable.create($('table'))
        .ajax.url('/get/data/url')
            .params((data, settings) => {
                return {
                    get: 1,
                    data: 2,
                    params: 3,
                };
            })
            .filter((response) => {
                return response.
                    total(response.serverResponse.data.total || 0).
                    stringify();
            })
            .success((response) => {
                return []; // Columns data
            })
            .always()
        .init();
```

#### 5. Custom sorting

``` javascript
import { DataTable, DataTableSorting } from 'constructor.datatables.net';

DataTableSorting.create('string-length')
    .pre((a) => a.length)
    .asc((a, b) => a > b)
    .desc((a, b) => b < a)
    .add();

DataTable.create($('table'))
    .columns([
        { title: '#1', data: 'string', type: 'string-length' },
    ])
    .init();
```
