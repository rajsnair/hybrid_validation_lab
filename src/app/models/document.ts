/* ---------- Common primitive types ---------- */

export type CellValue =
  | string
  | number
  | boolean
  | null;

export type ValidationStatus =
  | 'valid'
  | 'invalid'
  | 'pending';

export type ValidationMode =
  | 'standard'
  | 'large';


/* ---------- Cell ---------- */

export interface Cell {
  cellId: string;
  rowId: string;
  columnId: string;
  value: CellValue;

  validationStatus?: ValidationStatus;
  validationMessage?: string;
}


/* ---------- Row ---------- */

export interface Row {
  rowId: string;
  rowNumber: number;
  cellIds: string[];
}


/* ---------- Column ---------- */

export interface Column {
  columnId: string;
  columnName: string;
  columnNumber: number;

  dataType: 'string' | 'number' | 'boolean' | 'date';

  required: boolean;
  editable: boolean;

  cellIds: string[];
}


/* ---------- Table ---------- */

export interface Table {
  tableId: string;
  tableName: string;

  rowCount: number;
  columnCount: number;

  rows: Row[];
  columns: Column[];

  cells: Record<string, Cell>;
}


/* ---------- Document ---------- */

export interface DocumentMetadata {
  documentId: string;
  documentName: string;
  rowCount: number;
  mode: ValidationMode;
}

export interface ValidationDocument {
  metadata: DocumentMetadata;
  tables: Table[];
}