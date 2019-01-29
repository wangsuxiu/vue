<template>
    <v-form v-model="valid" ref="addTaskForm">
        <v-card>
            <v-layout column align-center>
                <v-text-field
                    v-model="taskName"
                    :rules="nameRules"
                    :counter="10"
                    label="add column"
                    required
                    
                ></v-text-field>
                    <v-select
                        :items="columns"
                        label="add task"
                        v-model="columnName"   

                    ></v-select>
            </v-layout>
            <v-card-actions class="mt-2">
                <v-layout row justify-end>
                    <v-btn flat @click="addTask">save</v-btn>
                    <v-btn flat @click="cancel">cancel</v-btn>
                </v-layout>
        </v-card-actions>
        </v-card>
    </v-form>
</template>


<script>
export default {
    name:'addTaskForm',
    data(){
        return{
            taskName:'',
            nameRules: [
                (v) => !!v || 'taskName is required',
                (v) => v.length <= 20 || 'taskName must be less than 10 characters'
            ],
        }
    },
    computed:{
        columns(){
            return this.$store.state.columns.columns.map(x=>x.name)
        }
    },
    methods:{
        addTask(){
             this.$store.dispatch('addDialog/UPDATE_SHOW',
                {
                    type:'',
                    display:false
                }
            )
           if(this.$refs.addTaskForm.validate()){
                let columns=this.$store.state.columns.columns
                    columns.forEach((item)=>{
                        if(item.name==this.columnName){
                            item.tasks.push({
                                name:this.taskName,
                                order:item.tasks.length
                            })
                        }
                    })
                this.$store.dispatch('columns/UPDATE_COLUMNS',columns)

           }



        },
        cancel(){
            this.$store.dispatch('addDialog/UPDATE_SHOW',
                {
                    type:'',
                    display:false
                }
            )
        },


    }
}
</script>

<style>

</style>


