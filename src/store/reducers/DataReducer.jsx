import types from "../actions/DataActions";

export default (state, action) => {
  switch (action.type) {
    case types.SET_NEWS: {
      return {
        ...state,
        news: action.payload.data.sort((a, b) => a.id < b.id),
      };
    }
    case types.SET_SERVICES: {
      return {
        ...state,
        services: action.payload.data.sort((a, b) => a.id < b.id),
      };
    }
    case types.SET_TABLES: {
      return {
        ...state,
        tables: action.payload.data.sort((a, b) => a.id < b.id),
        filtered: action.payload.data.sort((a, b) => a.id < b.id),
      };
    }
    case types.FILTER_FORMAT: {
      const format =
        action.payload.format === "all"
          ? state.tables
          : state.tables.filter((i) => i.format === action.payload.format);
      const date =
        action.payload.date === "all"
          ? format
          : action.payload.date === "latest"
          ? format.sort((a, b) => a.id < b.id)
          : format.sort((a, b) => a.id > b.id);
      console.log(date);
      return {
        ...state,
        filtered: date,
      };
    }
    default:
      return state;
  }
};
