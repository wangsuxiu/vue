<template>
  <!-- <div id="app"> -->
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <!-- <div class="source">
     <draggable v-model="parameter" :options="{group:{ name:'main', pull:'clone', put:false,sort:false }}" :move="onMove" @end="onEnd" @remove="onRemove">
            <el-button class="my-btn" v-for="(element, index) in parameter" :key="index">
              {{element.name}}
            </el-button>
          </draggable>
    </div>

    <div class="target">
          <draggable v-model="relation" :options="{group:'main'}" class="editing">
          <div v-for="(element,index) in relation" :key="index" class="dropbutton">
              {{element.name}}
            
          </div>

        </draggable>
    </div> -->
    <v-app>
      <v-navigation-drawer app></v-navigation-drawer>
  <v-toolbar>
       <!-- <v-toolbar-side-icon></v-toolbar-side-icon>
        <v-toolbar-title>Title</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
         
          <v-btn flat icon @click="openAddDialog('column')">
            <v-icon>playlist_add</v-icon>
          </v-btn>
           <v-btn flat icon @click="openAddDialog('task')">
            <v-icon>add</v-icon>
          </v-btn>
        </v-toolbar-items>
  </v-toolbar>
  <v-content>
    <v-container fluid>
        <v-layout column>
            <maincontent></maincontent>
            <add-dialog></add-dialog>
        </v-layout>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
    </v-app>
  <!-- </div> -->
</template>

<script>
import draggable from 'vuedraggable'
import maincontent from './components/maincontent.vue'
import addDialog from './components/addDialog.vue'
export default {
  name: 'App',
  components:{
    draggable,
    maincontent,
    addDialog
  },
  data(){
    return{
      parameter: [
          {
            type: 'parameter',
            name: '模板参数',
            
          }
        ],
        relation:[],
        dragitem:null
    }
  },
  methods:{
    onMove(evt){
      // console.log(evt)
      this.dragitem=evt.draggedContext.element
      let item=this.dragitem
      this.relation.push(item)
      console.log(this.relation)
    },
    onEnd(){
     
    },
    onRemove(){
       debugger
    },
    openAddDialog(type){
      // debugger
      this.$store.dispatch('addDialog/UPDATE_SHOW',
        {
          type:type,
          display:true
        }
      )
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.source{
  display: inline-block;
  width:500px;
  height:500px;
  border:1px solid #000;
}
.target{
  display: inline-block;
  width:500px;
  height:500px;
  border:1px solid red;
 
}
.dropbutton{
  width:80px;
  height:50px;
  border-radius:.5em;
  background: blueviolet;
}
</style>
