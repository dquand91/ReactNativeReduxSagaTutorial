// Initial State
const initialState = {
  counter123: 0,
};

// Redux: Counter Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_COUNTER_FROM_SAGA_TO_REDUCER': {
      return {
        ...state,
        counter123: state.counter123 + action.value,
      };
    }
    case 'DECREASE_COUNTER_FROM_SAGA_TO_REDUCER': {
      return {
        ...state,
        counter123: state.counter123 - action.value,
      };
    }
    case 'INCREASE_COUNTER_FROM_VIEW_TO_REDUCER': {
      return {
        ...state,
        counter123: state.counter123 + action.value,
      };
    }
    case 'DECREASE_COUNTER_FROM_VIEW_TO_REDUCER': {
      return {
        ...state,
        counter123: state.counter123 - action.value,
      };
    }
    default: {
      return state;
    }
  }
};

// Exports
export default counterReducer;
