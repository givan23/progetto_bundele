import {GET_DETAIL, GET_DETAIL_STORED} from "../constants/AppConstants";

export const getDetail = () => {

  return {
    type: GET_DETAIL
  };
};

export const getDetailStored = (result) => {

  return {
    type: GET_DETAIL_STORED,
    result
  };
};