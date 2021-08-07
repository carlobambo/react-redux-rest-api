import { createAsyncAction } from './actionCreators';

describe('Test createAsyncAction for list', () => {
  const listCons = {
    START: 'USERS_LIST_START',
    SUCCESS: 'USERS_LIST_SUCCESS',
    FAILED: 'USERS_LIST_FAILED',
  };


  test('asyncConst return properties', () => {
    const actions = createAsyncAction(listCons, () => {});
    expect(actions.start).toBeDefined();
    expect(actions.failed).toBeDefined();
    expect(actions.success).toBeDefined();
  })


  test('test success flow', () => {
    const successResponse = {
      response: {
        data: {
          'users': [{
            id: 0,
            name: 'user 1',
          }],
        },
      }
    };
    const apiMock = () => {
      return Promise.resolve(successResponse)
    };
    const startPayload = {
      params: {},
    };
    const startActionPayload = {
      type: listCons.START,
      payload: startPayload,
      // args: [startPayload],
    };
    const successActionPayload = {
      type: listCons.SUCCESS,
      payload: successResponse.response,
      args: [startPayload],
    };
    const actions = createAsyncAction(listCons, apiMock);
    const startDispatch = jest
      .fn()
      .mockImplementationOnce((action) => {
        expect(action).toEqual(startActionPayload);
      })
      .mockImplementationOnce((a) => {
        expect(a).toEqual(successActionPayload);
      });
    actions.start(startDispatch)(startPayload);
  });

  test('test error flow', () => {
    const errorResponse = {
      error: {
        error: {
         code: 404,
        },
      }
    };
    const apiMock = () => {
      return Promise.resolve(errorResponse)
    };
    const startPayload = {
      params: {},
    };
    const startActionPayload = {
      type: listCons.START,
      payload: startPayload,
      // args: [startPayload],
    };
    const errorPayload = {
      type: listCons.FAILED,
      payload: errorResponse.error,
      args: [startPayload],
    };
    const actions = createAsyncAction(listCons, apiMock);
    const startDispatch = jest
      .fn()
      .mockImplementationOnce((action) => {
        expect(action).toEqual(startActionPayload);
      })
      .mockImplementationOnce((a) => {
        expect(a).toEqual(errorPayload);
      });
    actions.start(startDispatch)(startPayload);
  });
});
