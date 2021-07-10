const START = "START";
const SUCCESS = "SUCCESS";
const FAILED = "FAILED";
const SEPARATOR = '_';

const CREATE = 'CREATE';
const UPDATE = 'UPDATE';
const PATCH = 'PATCH';
const LIST = 'LIST';
const DELETE = 'DELETE';

const CRUD_OPERATIONS = [
  CREATE,
  UPDATE,
  PATCH,
  LIST,
  DELETE,
];

const join = (pref, suff) => `${pref}${SEPARATOR}${suff}`;

export interface AsyncConsts {
  START: string,
  SUCCESS: string,
  FAILED: string,
};
export type CRUDConsts = {
  CREATE: AsyncConsts,
  UPDATE: AsyncConsts,
  PATCH: AsyncConsts,
  DELETE: AsyncConsts,
  LIST: AsyncConsts,
};

const createAsyncActionConst = (prefix : string) : AsyncConsts => {
  return {
    START: join(prefix, START),
    SUCCESS: join(prefix, SUCCESS),
    FAILED: join(prefix, FAILED),
  };
};

const createCRUDConst = (moduleName : string) : CRUDConsts => {
  const crudConsts = CRUD_OPERATIONS.reduce((allConsts : {}, op : string) => {
    const opPrefix = join(moduleName, op);
    return {
      ...allConsts,
      [op]: createAsyncActionConst(opPrefix),
    };
  }, {}) as CRUDConsts;
  return crudConsts;
};

export {
  START,
  SUCCESS,
  FAILED,
  SEPARATOR,
  createAsyncActionConst,
  createCRUDConst,
};
