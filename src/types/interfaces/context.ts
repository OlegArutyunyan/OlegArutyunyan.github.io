import { Dispatch, SetStateAction } from 'react';

type TDispatchValue<T> = T | null
type TDispatchFunction<T> = Dispatch<SetStateAction<T | null>>

export interface IFoodContext<T> {
    foodList: T| null
    setFoodList: Dispatch<SetStateAction<T | null>>
}

export interface IGoodContext<T> {
    good: T| null
}