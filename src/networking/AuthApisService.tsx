import {Method, callApi, LoginStatus} from './NetworkManger';
import {api} from './Environment';

export const SignUpApi = async (params: any) => {
  const response = await callApi(
    api.userCreate,
    Method.POST,
    params,
    false,
    false,
  );
  if (response.status == LoginStatus.success) {
    console.log(response);
    return response;
  } else {
    return response;
  }
};
