<template>
    <v-layout>
        <h2>Holidays</h2>
        <DataTable />
    </v-layout>
    
    </template>
    
    <script>
    //import Datatable from '../components/Datatable.vue';
    import DataTable from '../components/DataTable.vue';
    
    export default {
        name: 'Holidays',
        components: {
        DataTable
      },
       
        data (){
            return{
             hellow: "",
            };
        }
    
    
    }
    
    </script>