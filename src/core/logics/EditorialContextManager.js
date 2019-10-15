import {createLogic} from "redux-logic";
import {INIT_EDITORIAL_CONTEXT} from "../constants/CommonConstants";

const InitEditorialContextManager = createLogic({
  type: [INIT_EDITORIAL_CONTEXT],
  transform({getState, action}, next) {
    const {editorialContext = {}} = window;

    next({
      ...action,
      editorialContext
    })
  }
});

export const AemEditorialContextManagers = [InitEditorialContextManager];