import { AsyncConsts } from "./createConstants";

interface Data {}
interface Error{}
interface Params{}
type Args = [Params]

interface Response {
  response?: Data,
  error?: Error,
};
interface DataFetcher {
  (params: Params) : Promise<Response>,
};
interface Action {
  type: string,
  payload: {},
  args?: Args,
};

const createAsyncAction = (asyncConsts: AsyncConsts, fn: DataFetcher) => {
  const success = (data: Data, args: Args) => ({
    type: asyncConsts.SUCCESS,
    payload: data,
    args,
  });
  const failed = (error: Error, args: Args) => ({
    type: asyncConsts.FAILED,
    payload: error,
    args,
  });
  const start = (params: Params) => ({
    type: asyncConsts.START,
    payload: params,
  });
  return {
    start: (dispatch: Function) => async (params: Params) => {
      dispatch(start(params));
      const {
        response,
        error,
      } = await fn(params);
      if (error) {
        dispatch(failed(error, [params]));
      } else {
        dispatch(success(response, [params]))
      }
    },
    failed,
    success,
  };
};

export {
  createAsyncAction,
};
