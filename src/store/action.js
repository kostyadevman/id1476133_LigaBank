export const ActionType = {
  ADD_OPERATION: `data/addOperation`,
  DELETE_OPERATIONS: `data/deleteOperations`,
  SET_CURRENCY: `data/setCurrency`
};

export const ActionCreator = {
  addOperation: (operation) => ({
    type: ActionType.ADD_OPERATION,
    payload: operation
  }),
  deleteOperations: () => ({
    type: ActionType.DELETE_OPERATIONS,
  }),
  setCurrency: (currency) => ({
    type: ActionType.SET_CURRENCY,
    payload: currency
  })
};
