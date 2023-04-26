export type TAmountType = 'шт.' | 'кг' | 'уп.' | 'л'

export interface IGood {
    name: string,
    inBucket: boolean,
    measurementType: TAmountType,
    amount: number,
    step: number,
}

export interface IFoodList {
    [key: string]: IGood[],
}