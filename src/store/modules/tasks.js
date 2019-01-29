const state={
    tasks:[],

}


const getters={
    columns:state=>state.tasks
}


const mutations={
    updateTasks(state,value){
        state.tasks=value
    }
}


const actions={
    UPDATE_TASKS(context,value){
        context.commit('updateTasks',value)
    }
}

const tasks={
    namespaced:true,
    state,
    getters,
    mutations,
    actions,

}

export default tasks