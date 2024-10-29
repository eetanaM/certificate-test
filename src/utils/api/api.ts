import { IGetGoodListData, IRequest, ISaleData, ISaleReq } from "../types/api";

const BASE_URL = "https://sycret.ru/service/api/api";
const API_KEY = "011ba11bdcad4fa396660c2ec447ef14";
const GET_GOOD_LIST = "OSGetGoodList"
const SALE = "OSSale"


export const checkResponse = <T>(res: Response): Promise<T & IRequest> => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`)
}

export const checkSuccess = <T>(res: T & IRequest): Promise<T> => {
  if (res && res.result === 0 && res.resultdescription === "OK") {
    return res as unknown as Promise<T>
  }
  return Promise.reject(`Не получен успешный ответ`);
};


export const request = async <T>(options: RequestInit): Promise<T> => {
  return fetch(`${BASE_URL}`, options)
          .then(checkResponse<T>)
          .then(checkSuccess<T>)
}

export const loadCertificates = async (): Promise<IGetGoodListData> => {
    return request<IGetGoodListData>({
      method: "POST",
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({'MethodName': `${GET_GOOD_LIST}`, 'ismob': '0', 'ApiKey': `${API_KEY}`}).toString()
    })
}

export const postOrder = async (orderData: ISaleReq): Promise<ISaleData> => {
    return request<ISaleData>({
      method: "POST",
      headers: {
        "Content-Type": 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({'MethodName': `${SALE}`, 'ismob': '0', 'ApiKey': `${API_KEY}`}).toString() +"&" + Object.entries(orderData).map(([key, value]) => `${key}=${value}`).join('&')
    })
}
