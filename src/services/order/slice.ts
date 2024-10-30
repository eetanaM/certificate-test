import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICertificate, IOrderState } from '../../utils/types/type';
import { executePurchase } from './actions';

export const initialState: IOrderState = {
    loading: false,
    error: null,
    certificate: null,
    success: false
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
    extraReducers: builder => (
        builder
            .addCase(executePurchase.pending, state => {
                state.error = null,
                state.loading = true
            })
            .addCase(executePurchase.fulfilled, state => {
                state.loading = false;
                state.certificate = null;
                state.success = true;
            })
            .addCase(executePurchase.rejected, (state, action) => {
                state.loading = false;
                state.certificate = null;
                state.error = action.error
            })
    ),
    selectors: {
        getOrder: state => state.certificate,
        isSuccess: state => state.success
    },
})

export const { getOrder, isSuccess } = orderSlice.selectors;

export const { setOrder, resetOrder } = orderSlice.actions;

export const orderReducer = orderSlice.reducer
