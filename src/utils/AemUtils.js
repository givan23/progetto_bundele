


export const getAemErrorMessage = (editorialContext) => {
  const {error = {}} = editorialContext;
  const {managerException = "", callServiceError = ""} = error;
  return {
    managerException,
    callServiceError
  }
};

export const getAemTitle = (editorialContext) => {
  const {title = "COMMON"} = editorialContext;
  return {
    title
  }
};