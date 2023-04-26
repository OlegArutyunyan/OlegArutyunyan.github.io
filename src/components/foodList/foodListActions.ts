import { Dispatch, SetStateAction } from 'react';
import { IFoodList, IGood } from '../../types/interfaces';

export const changeFoodListValue = (
    category: string,
    goodName: string,
    newValue: string | boolean,
    type: 'add' | 'increment' | 'decrement' | 'measurmentType',
    setFunc: Dispatch<SetStateAction<IFoodList | null>>
): void => {
    setFunc((goodsList) => {
        const newGoodsList = JSON.parse(JSON.stringify(goodsList));
        return newGoodsList[category].map((good: IGood) => {
            if (good.name !== goodName) {
                return good
            }
            switch (type) {
                case 'add':
                    return {
                        ...good,
                        inBucket: newValue
                    }
                case 'increment':
                case 'decrement':
                    return {
                        ...good,
                        amount: getNewMeasuredValue(type, good.amount, good.step)
                    }
                case 'measurmentType':
                    return {
                        ...good,
                        type: newValue
                    }
                default:
                    return good;
            }
        })
    })
}

const getNewMeasuredValue = (
    operationType: 'increment' | 'decrement',
    currentValue: number,
    step: number,
) => {
    switch (operationType) {
        case 'increment':
            return currentValue + step > 20 ? 20 : currentValue + step;
        case 'decrement':
            return currentValue - step <= 0 ? currentValue : currentValue - step;
        default:
            return currentValue;
    }
}