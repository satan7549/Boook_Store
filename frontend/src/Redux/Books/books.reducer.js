// export const GET_BOOKS_LOADING = "books/loading";
// export const GET_BOOKS_SUCCESS = "books/success";
// export const GET_BOOKS_ERROR = "books/error";

import {
  GET_BOOKS_ERROR,
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
} from "./books.ActionType";

// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  allBooks: []
};

export const bookReducer = (state = productInitalState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_BOOKS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_BOOKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        allBooks: payload,
      };
    }

    default: {
      return state;
    }
  }
};
