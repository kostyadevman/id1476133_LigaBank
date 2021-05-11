import {API_KEY} from "../const";
import {ActionCreator} from "./action";

export const getCurrency = (fromCurrency, toCurrency, date) => (dispatch, _getState, api) => {
    const direction = `${fromCurrency}_${toCurrency}`
    return api.get(`?q=${direction}&compact=ultra&date=${date}&apiKey=${API_KEY}`)
        .then(({data}) => {
            // const dd = date.toString();
            // console.log(data[direction][dd]);
            // dispatch(ActionCreator.setCurrency(`12`));
        })
      .catch((error) => {
        console.log(error)
      })
};
