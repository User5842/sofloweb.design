export interface ProjectGridRow {
  readonly columnCount: number;
  readonly isHeader: boolean;
  readonly rowData: (string | number | ImageMetadata)[];
}
