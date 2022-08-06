import { createContext, useContext, useEffect, useReducer } from "react";
import DataReducer from "../reducers/DataReducer";
import action from "../actions/DataActions";

const Data = createContext();
console.log(process.env)
const initialState = {
  filtered: [],
  news: [],
  services: [],
  tables: [],
};
export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  const fetchNews = async () => {
    await fetch(`${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_MAIN_API_PATH_KEY}/newsS/get`)
      .then((r) => r.json())
      .then((r) => dispatch({ type: action.SET_NEWS, payload: r }))
      .catch((e) => console.log(e));
  };
  const fetchServices = async () => {
    await fetch(`${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_MAIN_API_PATH_KEY}/services/get`)
      .then((r) => r.json())
      .then((r) => dispatch({ type: action.SET_SERVICES, payload: r }))
      .catch((e) => console.log(e));
  };
  const fetchTables = async () => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_MAIN_API_PATH_KEY}/tables/get`, requestOptions)
      .then(response => response.json())
      .then(r => dispatch({ type: action.SET_TABLES, payload: r }))
      .catch(error => console.log('error', error));
  };
  // dispatch({ type: action.SET_TABLES, payload: r })
  const filterFormat = (type) => {
    console.log(type);
    dispatch({ type: action.FILTER_FORMAT, payload: type });
  };

  const sendContact = async (data) => {
    try {
      const e = await fetch(`${process.env.REACT_APP_HTTP}://${process.env.REACT_APP_MAIN_API_PATH_KEY}/api/contact/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          phoneNumber: data.phoneNumber,
          text: data.text,
          typeService: data.typeService,
        }),
      });
      return await e.json();
    } catch (e_1) {
      return console.log(e_1);
    }
  };

  useEffect(() => { }, []);
  return (
    <Data.Provider
      value={{
        ...state,
        fetchNews,
        fetchServices,
        fetchTables,
        sendContact,
        filterFormat,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export const UseDataContext = () => useContext(Data);
