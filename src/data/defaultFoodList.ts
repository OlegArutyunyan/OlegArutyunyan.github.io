import { IFoodList, TAmountType } from "../types/interfaces/foodList";

export const measurements: TAmountType[] = ['шт.' , 'кг' , 'уп.' , 'л']

export const defaultFoodList: IFoodList = {
    "Овощи": [
        {
            name: "Помидоры",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Огурцы",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Морковь",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Лук репчатый",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Картошка",
            inBucket: false,
            measurementType: 'кг',
            amount: 1,
            step: 1,
        },
        {
            name: "Чеснок",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Бананы",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
    ],
    "Бакалея": [
        {
            name: "Пшено",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Геркулес",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Макароны",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Гречка",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Рис",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Каши",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Рамен",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Немолоко",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Мюсли",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
    ],
    "Консервы, соусы и пр.": [
        {
            name: "Кетчуп",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Майонез",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Фасоль",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Масло подсолнечное",
            inBucket: false,
            measurementType: 'л',
            amount: 1,
            step: 1,
        },
    ],
    "Хлебобулочные и к чаю": [
        {
            name: "Хлеб белый",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Хлеб ржаной",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Хлеб черный",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Чай",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
    ],
    "Молочка": [
        {
            name: "Йогурты",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Творог",
            inBucket: false,
            measurementType: 'кг',
            amount: 0.3,
            step: 1,
        },
        {
            name: "Масло слив.",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Масло шокол.",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Ряженка",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Сметана",
            inBucket: false,
            measurementType: 'кг',
            amount: 0.2,
            step: 0.1,
        },
        {
            name: "Сыр плавленный",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Сыр сладкий",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Яйца",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
    ],
    "Деликатесы": [
        {
            name: "Сало",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Ветчина",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Сыр твердый",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Сосиски",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Курица для супа",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
    ],
    "Бытовуха": [
        {
            name: "Мыло",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Жидкое мыло",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Гель для душа",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Шампунь",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Бальзам",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Зубная паста",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Порошок стир.",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Ополаскиватель",
            inBucket: false,
            measurementType: 'шт.',
            amount: 1,
            step: 1,
        },
        {
            name: "Губки",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Тряпки",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Бум. полотенца",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Туал. бумага",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
    ],
    "Заморозка": [
        {
            name: "Пельмени",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Вареники",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Блины",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
        {
            name: "Наггетсы",
            inBucket: false,
            measurementType: 'уп.',
            amount: 1,
            step: 1,
        },
    ],
    "Другое": []
}