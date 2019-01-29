<template>
    <v-container fluid>
        <v-layout row wrap>
            <v-dialog v-model="dialog.display" max-width="500px" persistent>
                <!-- <v-card-text>
                    弹框内容
                </v-card-text> -->
                <add-column v-if="dialog.type=='column'"></add-column>
                <add-task v-if="dialog.type=='task'"></add-task>
            </v-dialog>

        </v-layout>
    </v-container>
</template>

<script>
import {mapState} from 'vuex'
import addColumn from './addColumnForm.vue'
import addTask from './addTaskForm.vue'



export default {
    name:'addDialog',
    //全部用vuex进行状态管理,就不需要props
    data(){
        return{

        }
    },
    components:{
        addColumn,
        addTask,
    },
    computed:{
        dialog(){
            // debugger
           let result= this.$store.state.addDialog.dialog;
           return (result===null)?{type:'',display:false}:result
            
        }
    },
    methods:{

    }

}
</script>
<style>

</style>

