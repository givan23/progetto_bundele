import createReducer from "../../Utils/CreateReducerUtils"


const getDetailStored = (draft, action) => {
  const {result = {}} = action;
  const {name = "", surname="", code=""} = result;

  draft.name = name;
  draft.surname = surname;
  draft.code = code;
};

const initState = {
  name: "",
  surname: "",
  code: ""
};

export default createReducer({
  GET_DETAIL_STORED: getDetailStored
}, initState);

