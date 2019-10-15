import {createLogic} from "redux-logic";
import {GET_DETAIL} from "../constants/AppConstants";
import {ONE} from "../constants/CommonConstants";
import {getAemErrorMessage} from "../../utils/AemUtils";
import {getDetailStored} from "../actions/AppActions";

const DetailManager = createLogic({
  type: GET_DETAIL,

  async process({action, getState}, dispatch, done) {

    const {editorialContext = {}} = getState().editorialContextReducer;
    const {managerException = "", callServiceError = ""} = getAemErrorMessage(editorialContext);

    try {

      const {data = {}} = {name: "Mario", surname: "Rossi", code: "123"} //await detailServices.search();
      const {result = {}} = data;
      const {code = {}} = result;

      if (code === ONE) {

        dispatch(getDetailStored(result));

      } else {
        console.log(callServiceError);

      }
    } catch (e) {
      console.log(managerException);

    }
    done();
  }
});

export const AppManagers = [DetailManager];