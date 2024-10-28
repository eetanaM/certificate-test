interface IRequest {
    result: number,
    resultdescription: string,
}

interface IGetGoodListData extends IRequest {
    data: IGoodListData[],
}

interface IGoodListData {
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

interface ISaleReq {
    ID: number,
    TABLENAME: string,
    PRIMARYKEY: string,
    PRICE: number,
    SUMMA: number,
    CLIENTNAME: string,
    PHONE: string,
    EMAIL: string,
    PAYMENTTYPEID: 2,
    USEDELIVERY: 0,
    DELIVERYADRESS: string | null,
    ISGIFT: number | null,
    MSGTEXT: string | null,
    PNAME: string | null,
    PPHONE: string | null,
}

interface ISaleData extends IRequest {
    certNumber: string | null
}

export type {
    IGetGoodListData,
    IGoodListData,
    ISaleReq,
    ISaleData,
    IRequest
}
