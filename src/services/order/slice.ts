import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICertificate, IOrderState } from '../../utils/types/type';

export const initialState: IOrderState = {
    certificate: null
}

export const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
        setOrder: (state, action: PayloadAction<ICertificate>) => {
            state.certificate = action.payload
        },
        resetOrder: (state) => {
            state.certificate = null
        }
    },
    selectors: {
        getOrder: state => state.certificate
    },
})

export const { getOrder } = orderSlice.selectors;

export const { setOrder, resetOrder } = orderSlice.actions;

export const orderReducer = orderSlice.reducer
