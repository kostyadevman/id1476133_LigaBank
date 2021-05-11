import {ActionType} from "./action";


const initialState = {
  operations: [],
  currency: ``
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_OPERATION:
      return {
        ...state,
        operations: [...state.operations, action.payload]
      };
    case ActionType.DELETE_OPERATIONS:
      return {
        ...state,
        operations: []
      };
    case ActionType.SET_CURRENCY:
      return {
        ...state,
        currency: action.payload
      }
    default:
      return state
  }
};


export {reducer};
