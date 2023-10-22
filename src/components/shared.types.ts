import { Component } from 'react';
import type { DeepMap, FieldError, FieldValues } from 'react-hook-form';
import { IBreakPoint } from './theme.constants';

export type FieldErrors<TFieldValues extends FieldValues = FieldValues> =
  DeepMap<TFieldValues, FieldError>;

export type IFieldValues = { name: string; label: string; type: string };

export enum InputLabelTypes {
  External = 'EXTERNAL',
  Internal = 'INTERNAL',
}

export interface IHeadingProps {
  text: string;
  classOverrides?: string;
  textClassOverrides?: string;
  actionItemHtml?: JSX.Element;
}

export interface ITitleProps extends IHeadingProps {
  variant?: Component;
  size?: TypographySizes;
}

export enum TypographySizes {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = '2xl',
}

export enum TypographyVariants {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  body1 = 'p',
  body2 = 'p',
  body3 = 'p',
  inherit = 'p',
}
export interface IRowConfig<T> {
  build: (row: T, index: number) => JSX.Element;
}

export interface IHeaderConfig<T, K extends keyof T> {
  label: string;
  keyName: K;
}

export interface ITablePaginationProps {
  pgIndex: number;
  page?: number;
  rowsPerPage: number;
  rowCount: number;
  onPageStart: () => void;
  onPageDecrement: () => void;
  onPageInputChange: (page: string) => void;
  onPageIncrement: () => void;
  onPageEnd: () => void;
}

export interface IDataTableProps<T, K extends keyof T> {
  tableHeaderConfig: Array<IHeaderConfig<T, K>>;
  tableRowConfig: IRowConfig<T>[];
  data: T[];
  defaultSortOrder?: SortOrder;
  defaultSortOrderBy: K;
  defaultPage?: number;
  defaultRowsPerPage: number;
  mobileBreakpoint?: IBreakPoint;
}

export interface IDataTableHeaderProps<T, K extends keyof T> {
  tableHeaderConfig: Array<IHeaderConfig<T, K>>;
  onRequestSort: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    property: K,
  ) => void;
  onRequestSortOrder: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    order: SortOrder,
  ) => void;
  sortOrder: SortOrder;
  sortOrderBy: K;
  classOverrides?: string;
}

export interface IDataTableRowProps<T> {
  tableRowConfig: IRowConfig<T>[];
  mobileBreakpoint?: IBreakPoint;
  rowData: T;
}

export interface IDataTableCellProps {
  keyName: string;
  classNames?: string;
  label?: string;
  mobileBreakpoint?: IBreakPoint;
  children:
  | JSX.Element
  | Array<JSX.Element>
  | string
  | number
  | React.ReactNode;
}

export const enum IStatus {
  pending = 'pending',
  credit = 'credit',
  overdue = 'overdue',
  declined = 'declined',
}

export type Order = 'asc' | 'desc';

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

/* Button */
export * from './Button/types';