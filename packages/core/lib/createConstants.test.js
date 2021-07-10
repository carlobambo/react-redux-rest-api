import {
  createAsyncActionConst,
} from "./createConstants";

test('create async constants for LIST', () => {
  const prefix = 'LIST';
  expect(createAsyncActionConst(prefix)).toEqual({
    START: 'LIST_START',
    SUCCESS: 'LIST_SUCCESS',
    FAILED: 'LIST_FAILED',
  });
});


