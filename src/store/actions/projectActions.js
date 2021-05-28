export function createProject(project) {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    const {
      profile: { firstName, lastName },
      auth: { uid },
    } = getState().firebase

    getFirestore()
      .collection('projects')
      .add({
        ...project,
        authorFirstName: firstName,
        authorLastName: lastName,
        authorID: uid,
        createdAt: new Date(),
      })
      .then(() => dispatch({ type: 'CREATE_PROJECT', payload: project }))
      .catch((err) => dispatch({ type: 'CREATE_PROJECT_ERROR', payload: err }))
  }
}
