export type Operator = '=' | '>' | '<' | '>=' | '<=' | '<<' | '<=<' | '<<=' | '<=<=';

export const EQ:    Operator = '=';
export const GT:    Operator = '>';
export const GTE:   Operator = '>=';
export const LT:    Operator = '<';
export const LTE:   Operator = '<=';
export const BT:    Operator = '<<';
export const BTE:   Operator = '<=<=';
export const BTLE:  Operator = '<=<';
export const BTRE:  Operator = '<<=';

export interface Filter {
    operator: Operator;
    value: any;
    field: string;
}
