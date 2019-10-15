import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import AppComponent from "../components/AppComponent";
import {getDetail} from "../core/actions/AppActions";
import {getAemTitle} from "../utils/AemUtils";


const getAppReducer = (state) => state.appReducer;
const getEditorialContext = (state) => state.editorialContextReducers;

const mapStateToProps = createSelector(
  [getAppReducer, getEditorialContext],
  (appProps, editorialContext) => {
    const {name = "", surname = "", code = ""} = appProps;
    const {title = ""} = getAemTitle(editorialContext);

    return {
      name,
      surname,
      code,
      title
    };
  });


const mapDispatchToProps = dispatch => {

  return {
    getDetail: () => {
      dispatch(getDetail());
    },
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);