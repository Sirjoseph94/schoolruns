<template>
<!--begin header -->
  <div class="scholars fluid-container">
    <div class="jumbotron text-center">
    <h1 class="mt-3 ">Hello am working</h1>
    <p class="title">This is the profiles of some outstanding students </p>
    </div><!--end header-->

<!--begin main body -->
    <div class="container">
      <div class="row">
        <Alert v-if="alert" v-bind:message="alert"/>
      <!--card -->           
      <div class="col-md-4 mt-5"  v-for="student in students">               
        <div class="card" style="width: 20rem;">
        <div class="card-body" >
          <h4 class="card-title text-center"> {{student.name}} <span class="badge badge-secondary">{{ student.grade}}</span></h4>
          <p class="card-text"></p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">MAT. No.: {{student.matriculation_number}}</li>
          <li class="list-group-item">Age.: {{student.age}}</li>
          <li class="list-group-item">Department.: {{student.department}}</li>
          <li class="list-group-item">Level: {{student.level}}</li>
        
        </ul>
          <a href="#" class="btn btn-primary">Update</a>
          <a href="#" class="btn btn-danger">Delete</a>
        </div>
              <div class="h-100"></div>
      </div>
      <!--/card -->

      </div>
      </div>
                    
  </div> <!--end main -->

 </div>
  </div>
</template>

<script>
import Alert from './Alert';
export default {
  name: 'students',
  data () {
    return {
     students: [],
     alert:'',
    }
  },
  methods:{
    fetchStudents(){
      this.$http.get('http://localhost:1000/students')
        .then(function(response){
          
           this.students = response.body;
   
        });
    }
  },
  created: function(){
    if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
    }
    this.fetchStudents();
  },
  updated: function(){
    this.fetchStudents();
  },
  components: {
    Alert
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
