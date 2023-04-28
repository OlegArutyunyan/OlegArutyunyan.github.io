import { Dispatch, SetStateAction } from 'react';
import { IFoodList, IGood } from '../../types/interfaces';

type TActionTypes = 'addToBucket' | 'increment' | 'decrement' | 'measurementType' | 'amount';

export const changeFoodListValue = (
    category: string,
    goodName: string,
    type: TActionTypes,
    setFunc: Dispatch<SetStateAction<IFoodList | null>>,
    newValue?: string | boolean,
): void => {
    setFunc((goodsList) => {
        let newGoodsList = JSON.parse(JSON.stringify(goodsList));
        if (category === 'Другое' && type === 'addToBucket') {
            if (newValue) {
                newGoodsList['Другое'] = [...newGoodsList['Другое'], {
                    name: goodName,
                    inBucket: newValue,
                    measurementType: 'шт.',
                    amount: 1,
                    step: 1,
                }]
            } else {
                newGoodsList['Другое'] = newGoodsList['Другое'].filter((good: IGood) => good.name !== goodName);
            }
            return newGoodsList;
        }

        newGoodsList = {
            ...newGoodsList,
            [category]: newGoodsList[category].map((good: IGood) => {
                if (good.name !== goodName) {
                    return good;
                }
                switch (type) {
                    case 'addToBucket':
                        if (category === 'Другое' && newValue === false) {
                            return;
                        }
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
                    case 'measurementType':
                        return {
                            ...good,
                            measurementType: newValue
                        }
                    case 'amount':
                        return {
                            ...good,
                            amount: newValue
                        }
                    default:
                        return good;
                }
            })
        }
        return newGoodsList;
    })
}

const getNewMeasuredValue = (
    operationType: 'increment' | 'decrement',
    currentValue: number,
    step: number,
) => {
    const checkedValue = isNaN(currentValue) ? step : +currentValue
    let newAmount = checkedValue;
    switch (operationType) {
        case 'increment':
            newAmount = checkedValue + step;
            break;
        case 'decrement':
            newAmount = currentValue - step;
            break;
        default:
            break;
    }
    if (newAmount > 20) {
        newAmount = 20;
    } else if (newAmount <= 0) {
        newAmount = step;
    }
    return parseFloat(newAmount.toFixed(2));
}