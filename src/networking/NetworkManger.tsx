import Axios from 'axios';
import {baseURL} from './Environment';
import {getDataFromStorage} from '../utils/storage';
import {Keys} from '../constants';

export enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export enum LoginStatus {
  success = 101,
  failureschool = 102,
  failureusername = 103,
  failurepassword = 104,
}

var defaultHeaders: any = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const callApi = async (
  endPoint: any,
  method: any,
  data: any,
  isBearer: any,
  multipart: any,
) => {
  var url = baseURL + endPoint;
  if (isBearer) {
    const token = await getDataFromStorage(Keys.userToken);
    defaultHeaders['Authorization'] = 'Bearer ' + token;
  } else {
    delete defaultHeaders.Authorization;
  }
  if (multipart) {
    defaultHeaders['Content-Type'] = 'multipart/form-data';
  } else {
    defaultHeaders['Content-Type'] = 'application/json';
  }
  let response = await Axios({
    url,
    method,
    headers: defaultHeaders,
    data: method == Method.GET ? undefined : multipart ? data : data,
  })
    .then((res: any) => res?.data)
    .catch((err: any) => {
      return {
        error: err,
      };
    });
  return response;
};

export const fetchData = async (
  uri: string,
  method = Method.GET,
  data = null,
  isBearer = true,
  multipart = false,
  isPageUrl = false,
) => {
  const resData = await callApi(uri, method, data, isBearer, multipart);
  return resData;
};
