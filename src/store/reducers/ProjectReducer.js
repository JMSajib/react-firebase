const initState = {
    projects: [
        {id: '1', title: 'help me', content: 'blah blah blah'},
        {id: '2', title: 'collect all', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt', content: 'blah blah blah'}
    ]
}


const ProjectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log("Created Project", action.project)
    }
    return state;
}

export default ProjectReducer;