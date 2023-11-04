<template>
    <DataTable />
    </template>
    
    <script>
    //import Datatable from '../components/Datatable.vue';
    import DataTable from '../components/DataTable.vue';
    
    export default {
        name: 'Departments',
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