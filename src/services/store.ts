import { configureStore as createStore } from "@reduxjs/toolkit";

import { rootReducer } from "./rootReducer"

export const store = createStore({ reducer: rootReducer });

export type AppStore = typeof store
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
