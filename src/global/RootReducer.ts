import { configureStore } from "@reduxjs/toolkit";
import { ContactsAPI } from "./ContactsAPI";

export const RootReducer = configureStore({
    reducer: {
        [ContactsAPI.reducerPath]: ContactsAPI.reducer,
    },
        // gDM = getDefaultMiddleware.
    middleware: (gDM) => gDM().concat(ContactsAPI.middleware),
});



