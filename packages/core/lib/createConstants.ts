const START = "START";
const SUCCESS = "SUCCESS";
const FAILED = "FAILED";
const SEPARATOR = '_';

const join = (pref, suff) => `${pref}${SEPARATOR}${suff}`;

type AsyncConsts = {
  START: string,
  SUCCESS: string,
  FAILED: string,
};

const createAsyncActionConst = (prefix : string) : AsyncConsts => {
  return {
    START: join(prefix, START),
    SUCCESS: join(prefix, SUCCESS),
    FAILED: join(prefix, FAILED),
  };
}

export {
  START,
  SUCCESS,
  FAILED,
  SEPARATOR,
  createAsyncActionConst,
};
