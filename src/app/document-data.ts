import { Service } from '@angular/core';
import { Cell, Row, Column, Table, ValidationDocument } from './models/document';
@Service()
export class DocumentData {

getStandardDocument(): ValidationDocument {
   
 
    
const cells:  Record<string, Cell> = {
    'R1-C1': {cellId: 'R1-C1', rowId: 'R1', columnId: 'C1', value: 'John Doe' },
    'R1-C2': {cellId: 'R1-C2', rowId: 'R1', columnId: 'C2', value: 30 },
    'R1-C3': {cellId: 'R1-C3', rowId: 'R1', columnId: 'C3', value: true },
    'R2-C1': {cellId: 'R2-C1', rowId: 'R2', columnId: 'C1', value: 'Jane Smith' },    
    'R2-C2': {cellId: 'R2-C2', rowId: 'R2', columnId: 'C2', value: 25 },
    'R2-C3': {cellId: 'R2-C3', rowId: 'R2', columnId: 'C3', value: false },
    'R3-C1': {cellId: 'R3-C1', rowId: 'R3', columnId: 'C1', value: 'Alice Johnson' },
    'R3-C2': {cellId: 'R3-C2', rowId: 'R3', columnId: 'C2', value: 28 },
    'R3-C3': {cellId: 'R3-C3', rowId: 'R3', columnId: 'C3', value: true }
  };
const rows: Row[] = [
    { rowId: 'R1', rowNumber: 1, cellIds: ['R1-C1', 'R1-C2', 'R1-C3'] },
    { rowId: 'R2', rowNumber: 2, cellIds: ['R2-C1', 'R2-C2', 'R2-C3'] },
    { rowId: 'R3', rowNumber: 3, cellIds: ['R3-C1', 'R3-C2', 'R3-C3'] }
  ];
 
const columns: Column[] = [{columnId: 'C1', columnName: 'Name', columnNumber: 1, dataType: 'string', required: true, editable: true, cellIds:['R1-C1', 'R2-C1', 'R3-C1']},
{columnId: 'C2', columnName: 'Age', columnNumber: 2, dataType: 'number', required: true, editable: true, cellIds:['R1-C2', 'R2-C2', 'R3-C2']},
{columnId: 'C3', columnName: 'Active', columnNumber: 3, dataType: 'boolean', required: true, editable: true, cellIds:['R1-C3', 'R2-C3', 'R3-C3']}];

 const table: Table = {
      tableId: 'T1',
      tableName: 'Invoices',
      rowCount: 2,
      columnCount: 2,
      rows,
      columns,
      cells
    };

return {
      metadata: {
        documentId: 'doc-001',
        documentName: 'Standard Test Document',
        rowCount: 3,
        mode: 'standard'
      },
      tables: [table]
    };

}
}
