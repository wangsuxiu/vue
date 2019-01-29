const state={
    columns:[
        {
            name:'test',
            tasks:[
                {   
                    order:1,
                    name:'任务1'
                },
                {   
                    order:2,
                    name:'任务2'
                }

            ]
        },
        {
            name:'test2',
            tasks:[
                {   
                    order:1,
                    name:'任务1'
                },
                {   
                    order:2,
                    name:'任务2'
                }

            ]
        }
    ],

}


const getters={
    columns:state=>state.columns
}


const mutations={
    updateColumns(state,value){
        state.columns=value
    }
}


const actions={
    UPDATE_COLUMNS(context,value){
        context.commit('updateColumns',value)
    }
}

const columns={
    namespaced:true,
    state,
    getters,
    mutations,
    actions,

}

export default columns