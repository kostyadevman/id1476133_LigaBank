import {ActionType} from "./action";


const initialState = {
  operations: []
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
  }

  return state;
};


export {reducer};
