export const ActionType = {
  ADD_OPERATION: `data/addOperation`,
  DELETE_OPERATIONS: `data/deleteOperations`
};

export const ActionCreator = {
  addOperation: (operation) => ({
    type: ActionType.ADD_OPERATION,
    payload: operation
  }),
  deleteOperations: () => ({
    type: ActionType.DELETE_OPERATIONS,
  }),
};
