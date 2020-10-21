const stateHistory = {
    history: [],
}

const Reducer = (state = stateHistory, action) => {
    switch(action.type){
        case 'ADD':
            return{history: [...state.history,action.data]};
        case 'CLEAR':
            return{history:[]};
        default:
            return state;
    }
}

export default Reducer;