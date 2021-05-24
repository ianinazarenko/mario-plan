export function createProject(project) {
  return (dispatch, getSate, { getFirestore, getFirebase }) => {
    getFirestore()
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'Mario',
        authorLastName: 'Ninja',
        authorID: 12345,
        createdAt: new Date(),
      })
      .then(() => dispatch({ type: 'CREATE_PROJECT', payload: project }))
      .catch((err) => dispatch({ type: 'CREATE_PROJECT_ERROR', payload: err }))
  }
}
