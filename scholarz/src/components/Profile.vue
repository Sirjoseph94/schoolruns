<template>
  <!--begin header -->
  <div class="profile fluid-container">
    <div class="jumbotron text-center default-color py-5">
    <h1 class="mt-3 text-white">Scholar Profile</h1>
    <p class="lead">This is the profile of an outstanding student </p>
    </div><!--end header-->
 <div class="container">
   <div class="clearfix">
 <router-link class="btn default-color" to="/">Back </router-link>
 <button class="btn danger-color" v-on:click="deleteStudent(student._id)">Delete</button>
   </div>
  <div class="row">
  <div class="card" style="width: 80%;">
        <div class="card-body">
          <h4 class="card-title text-center"> {{student.name}} <span class="badge badge-secondary">{{ student.grade}}</span></h4>
          <p class="card-text"></p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">MAT. No.: {{student.matriculation_number}}</li>
          <li class="list-group-item">Age: <b>{{student.age}}</b></li>
          <li class="list-group-item">department: <b>{{student.department}}</b></li>
          <li class="list-group-item">Level: <b>{{student.level}}</b></li>
        </ul>
          <router-link class="btn btn-primary" v-bind:to="'/update/'+student.id">Update</router-link>
       
        </div>
       
      </div>
  </div>
 </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data () {
    return {
     student: ''
    }
  },
  methods:{
    fetchStudent(id){
      this.$http.get('http://localhost:1000/student/'+id)
        .then(function(response){
          this.student = (response.body);
          console.log(this.student)
        });
    },
     deleteStudent(id){
      this.$http.delete('http://localhost:1000/student/'+id)
        .then(function(response){
          this.$router.push({path: '/', query:{
            alert: 'Student record deleted'
          }})
          console.log(this.student)
        });
    }

  },
  created: function(){
    this.fetchStudent(this.$route.params.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
