import {
  GET_BOOKS_ERROR,
  GET_BOOKS_LOADING,
  GET_BOOKS_SUCCESS,
  GET_BOOK_DETAILS_ERROR,
  GET_BOOK_DETAILS_LOADING,
  GET_BOOK_DETAILS_SUCCESS,
  GET_SEARCH_BOOKS_ERROR,
  GET_SEARCH_BOOKS_LOADING,
  GET_SEARCH_BOOKS_SUCCESS,
} from "./books.ActionType";

// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  allBooks: [],
  searchResult: [],
  singleBook: {},
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
    case GET_SEARCH_BOOKS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_SEARCH_BOOKS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_SEARCH_BOOKS_SUCCESS: {
      // Filter the allBooks array based on the search query
      const searchResult = state.allBooks.filter((book) => {
        // Convert the book title, author, and description to lowercase for case-insensitive search
        const lowercaseTitle = book.title.toLowerCase();
        const lowercaseAuthor = book.author.toLowerCase();
        const lowercaseDescription = book.description.toLowerCase();

        // Check if any of the book properties match the query
        return (
          lowercaseTitle.includes(payload) ||
          lowercaseAuthor.includes(payload) ||
          lowercaseDescription.includes(payload)
        );
      });
      return {
        ...state,
        loading: false,
        searchResult: searchResult,
      };
    }

    case GET_BOOK_DETAILS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_BOOK_DETAILS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_BOOK_DETAILS_SUCCESS: {
      return {
        ...state,
        loading: false,
        singleBook: payload,
      };
    }

    default: {
      return state;
    }
  }
};
