import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)


import columns from './modules/columns.js'
import tasks from './modules/tasks'
import addDialog from './modules/addDialog'

export default new vuex.Store({
    modules:{
        columns,
        tasks,
        addDialog
    }
})




