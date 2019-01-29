const state={
    dialog:null
}


const getters={
    dialog:state=>{return state.dialog}
}

const mutations={
    updateShow(state,value){
        state.dialog=value
    }
}

const actions={
    UPDATE_SHOW(context,value){
    //    debugger
        context.commit('updateShow',value)
    }
}

const addDialog={
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}

export default addDialog