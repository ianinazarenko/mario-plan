export function createProject(project) {
  return (dispatch, getSate) => {
    // make async call to database
    dispatch({ type: 'CREATE_PROJECT', payload: project })
  }
}
