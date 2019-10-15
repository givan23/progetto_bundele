import createReducer from "../../utils/CreateReducerUtils"

const initEditorialContext = (draft, action) => {
  draft.editorialContext = action.editorialContext
};

const initState = {
  editorialContext: {}
};

export default createReducer({
  INIT_EDITORIAL_CONTEXT: initEditorialContext
}, initState);