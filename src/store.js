import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./reducers/filter";
import giftReducer from "./reducers/gifts";
import loginReducer from "./reducers/login";
import notificationReducer from "./reducers/notification";
import usersReducer from "./reducers/users";

const store = configureStore({
  reducer: {
    gifts: giftReducer,
    notification: notificationReducer,
    login: loginReducer,
    filter: filterReducer,
    users: usersReducer,
  },
});

export default store;
