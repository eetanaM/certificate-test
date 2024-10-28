import { IGetGoodListData, IRequest } from "../types/api";

const BASE_URL = "https://sycret.ru/service/api/api";
const API_KEY = "011ba11bdcad4fa396660c2ec447ef14";
const GET_GOOD_LIST = "OSGetGoodList"


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


  export const request = async <T>(methodName: string, options: RequestInit): Promise<T> => {
    return fetch(`${BASE_URL}?MethodName=${methodName}&ismob=0&ApiKey=${API_KEY}`, options)
            .then(checkResponse<T>)
            .then(checkSuccess<T>)
  }

export const loadCertificates = async (): Promise<IGetGoodListData> => {
    return request<IGetGoodListData>(GET_GOOD_LIST, {})
}
