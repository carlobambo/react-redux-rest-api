import {
  createAsyncActionConst,
  create,
  createCRUDConst,
} from "./createConstants";

test('create async constants for LIST', () => {
  const prefix = 'LIST';
  expect(createAsyncActionConst(prefix)).toEqual({
    START: 'LIST_START',
    SUCCESS: 'LIST_SUCCESS',
    FAILED: 'LIST_FAILED',
  });
});
test('create crud constants for USERS', () => {
  const moduleName = 'USERS';
  const crudConsts = createCRUDConst(moduleName);
  expect(crudConsts).toEqual({
    CREATE: {
      START: 'USERS_CREATE_START',
      SUCCESS: 'USERS_CREATE_SUCCESS',
      FAILED: 'USERS_CREATE_FAILED',
    },
    UPDATE: {
      START: 'USERS_UPDATE_START',
      SUCCESS: 'USERS_UPDATE_SUCCESS',
      FAILED: 'USERS_UPDATE_FAILED',
    },
    PATCH: {
      START: 'USERS_PATCH_START',
      SUCCESS: 'USERS_PATCH_SUCCESS',
      FAILED: 'USERS_PATCH_FAILED',
    },
    DELETE: {
      START: 'USERS_DELETE_START',
      SUCCESS: 'USERS_DELETE_SUCCESS',
      FAILED: 'USERS_DELETE_FAILED',
    },
    LIST: {
      START: 'USERS_LIST_START',
      SUCCESS: 'USERS_LIST_SUCCESS',
      FAILED: 'USERS_LIST_FAILED',
    },
  });
});


