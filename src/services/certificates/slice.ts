import { createSlice } from '@reduxjs/toolkit'
import { getCertificates } from './actions';
import { ICertificatesState } from '../../utils/types/type';

export const initialState: ICertificatesState = {
    loading: true,
    error: null,
    certificates: []
}

export const certificatesSlice = createSlice({
    name: "certificates",
    initialState: initialState,
    reducers: {},
    selectors: {
        getAllCertificates: state => state.certificates
    },
    extraReducers: builder => {
        builder
            .addCase(getCertificates.pending, (state) => {
                state.loading = true,
                state.error = null
            })
            .addCase(getCertificates.fulfilled, (state, action) => {
                state.loading = false,
                state.certificates = action.payload.data
            })
            .addCase(getCertificates.rejected, (state, action) => {
                state.loading = false,
                state.error = action.error
            })
    },
})

export const { getAllCertificates } = certificatesSlice.selectors;

export const certificatesReducer = certificatesSlice.reducer
