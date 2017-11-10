<template>
  <div class="scholars container">
    <h1 class="mt-3">Hello am working</h1>
     <table class="table table-dark table-hover">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" >
        <td>{{ student.name }}</td>
        <td>{{ student.matriculation_number}}</td>
        <td>{{ student.department }}</td>
      </tr>
  
    </tbody>
  </table>
 </div>
  </div>
</template>

<script>

export default {
  name: 'students',
  data () {
    return {
     students: []
    }
  },
  methods:{
    fetchStudents(){
      this.$http.get('http://localhost:1000/students')
        .then(function(response){
          
           this.students = JSON.parse(response.body);
   
        });
    }
  },
  created: function(){
    this.fetchStudents();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
