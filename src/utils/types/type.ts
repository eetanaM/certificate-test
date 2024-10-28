import { SerializedError } from "@reduxjs/toolkit"

interface ICertificate {
    ID: number,
    TABLENAME: string,
    PRIMARYKEY: string,
    NAME: string,
    DESCRIPTION: string | null,
    PRICE: number,
    SUMMA: number,
    DISCOUNT: number | null,
    IMAGEURL: string | null,
    REC_SNO: string,
    REC_NAME: string,
    REC_SUM: number,
    REC_QUANTITY: number,
    REC_PAYMENT_METHOD: string,
    REC_PAYMENT_OBJECT: string,
    REC_TAX: string,
}

interface ICertificateCardProps {
    NAME: string,
    DESCRIPTION: string | null,
    PRICE: number,
}

interface ICertificatesState {
    loading: boolean,
    error: null | SerializedError,
    certificates: ICertificate[],
}


export type {
    ICertificate,
    ICertificatesState,
    ICertificateCardProps
}
