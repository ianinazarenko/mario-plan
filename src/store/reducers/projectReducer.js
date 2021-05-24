const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' },
  ],
}

function projectReducer(state = initState, action) {
  switch (action.type) {
    case 'CREATE_PROJECT':
      // const id = Date.now()
      // const newProject = { ...action.payload, id }
      // return { projects: [...state, newProject] }
      console.log('create project', action.payload)
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.payload)
    default:
      return state
  }
}

export default projectReducer
