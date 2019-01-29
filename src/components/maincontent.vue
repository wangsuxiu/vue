<template>
    
        <v-container fluid>
            <!-- <v-layout row wrap>
                 <v-flex xs12>
                    <v-card dark class="primary">
                    <v-card-text class="px-0">12</v-card-text>
                    </v-card>
                </v-flex>
                 <v-flex xs6 v-for="i in 2" :key="i">
                    <v-card dark class="secondary">
                    <v-card-text class="px-0">6</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs4 v-for="i in 3" :key="i">
                    <v-card dark class="primary">
                    <v-card-text class="px-0">4</v-card-text>
                    </v-card>
                </v-flex>
            </v-layout> -->
             <v-layout row wrap >
            <template v-for="(item,index) in columns">
               
                    <v-flex xs4 lg2 :key="index" class="mr-4">
                        <v-card dark>
                            <v-card-text>
                                {{item.name}}
                            </v-card-text>
                           <draggable element="ul" :options="dragOptions" :move="onMove" class="pl-0" @start="onStart" @end="onEnd" v-model="item.tasks">
                               <transition-group name="slid_up">
                                <v-card v-for="(task,index) in item.tasks" :key="task.order" class="primary mb-2">
                                <ul>
                                    <li>
                                        
                                        <div class="accent-1 mb-2 ">
                                            {{index}}
                                        </div>
                                    </li>
                                    <li>{{task.name}}</li>
                                </ul>
                            </v-card>
                           </transition-group>
                           </draggable>
                        </v-card>
                    </v-flex>
                
            </template>
            </v-layout>
        </v-container>
    
</template>
<script>
import draggable from 'vuedraggable'
export default {
    name:'maincontent',
    components:{
        draggable
    },
    data(){
        return{
                editable: true,
        }
    },
    computed:{
        columns(){
            return this.$store.state.columns.columns
        },
        dragOptions() {
            return {
                animation: 0,
                group: {
                    name:"description",
                    pull:'clone',

                },
                disabled: !this.editable,
                ghostClass: "ghost",
              
                sort:false,


            };
        }
    },
    methods:{
        onMove(evt){
            // debugger
            console.log('aaa')
            // return null

        },
        onStart(){
            
        },
        onEnd(){
            // debugger
        }
    }

}
</script>
<style scoped>
    .slid_up-enter-active, .slid_up-leave-active {
        transition: all .3s;
    }
    .slid_up-enter, .slid_up-leave-active {
        transform: translate3d(0,10rem,0)
    }
    .ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

</style>


