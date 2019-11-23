import { ErrorActionsTypes, Action } from '@app/store/actions/errors.action';

export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null
};

export const errorReducer: (state: ErrorState, action: Action) => ErrorState = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    case ErrorActionsTypes.ADD_ERROR:
      return { ...state, error: action.payload };
    case ErrorActionsTypes.REMOVE_ERROR:
      return { ...state, error: null };
      
    default:
      return state;
  }
};
