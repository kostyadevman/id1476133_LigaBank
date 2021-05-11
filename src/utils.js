import {CurrencyType} from "./const";

export const formatDate = (date) => {
    return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
}

export const formatDateToHistory = (date) => {
    return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`
}

export const EMPTY_OPERATION = {
    fromRate: ``,
    fromCurrency: CurrencyType.RUB,
    toRate: ``,
    toCurrency: CurrencyType.USD,
    date: new Date()
}
