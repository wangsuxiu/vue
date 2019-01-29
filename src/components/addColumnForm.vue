<template>
    <v-form v-model="valid" class="addColumnForm px-2">
      <v-card class="px-2" dark>
            <v-flex xs12>
             <v-text-field
            v-model="columnName"
            :rules="nameRules"
            :counter="10"
            label="add column"
            required
          ></v-text-field>  
        </v-flex>
        <v-card-actions class="mt-2">
            <v-layout row justify-end>
                <v-btn flat @click="addColumn">save</v-btn>
                <v-btn flat @click="cancel">cancel</v-btn>
            </v-layout>
        </v-card-actions>
      </v-card>
    </v-form>
</template>

<script>
export default {
    name:'addColumnForm',
    data(){
        return{
            valid:false,
            columnName:'',

        }
    },
    computed:{

    },
    methods:{
        addColumn(){
            this.$store.dispatch('addDialog/UPDATE_SHOW',
                {
                    type:'',
                    display:false
                }
            )
            let column=this.columnName
            let obj={
                name:column,
                tasks:[]
            }
            let columns=this.$store.state.columns.columns
            columns.push(obj)
            this.$store.dispatch('columns/UPDATE_COLUMNS',columns)
        },
        cancel(){
            this.$store.dispatch('addDialog/UPDATE_SHOW',
                {
                    type:'',
                    display:false
                }
            )
        }
    }
}
</script>


<style>
    .addColumnForm .v-card__actions{
        padding:0;
    }
    .addColumnForm .v-btn{
        padding:0;
    }
</style>


