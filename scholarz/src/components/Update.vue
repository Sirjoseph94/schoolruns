<template>
<!--begin header -->
  <div class="update fluid-container">
    <div class="jumbotron text-center">
    <h1 class="mt-3 ">Update Student Record</h1>
    <p class="lead">Fill the form to update student </p>
    </div><!--end header-->

<!--begin main body -->
    <div class="container">
      <div class="row">
      <!--card -->           
      <div style="width:80%" class="mx-auto">
          <form v-on:submit="updateStudent">
              <div class="form-group">
                <label class="col-form-label" for="name"></label>
                <input type="text" class="form-control" id="name" v-model="students.name"  placeholder="Enter full name">
              </div>
              <div class="form-group">
                <label class="col-form-label" for="mat_no"></label>
                <input type="text" class="form-control" id="mat_no" placeholder="Enter Mat. no." v-model="students.matriculation_number">
              </div>
       
              <div class="form-group">
                <label class="col-form-label" for="department"></label>
                <input type="text" class="form-control" id="department" placeholder="Enter Department" v-model="students.department">
              </div>

     

              <div class="form-group">
                <label class="col-form-label" for="level"></label>
                <select class="form-control" id="level" v-model="students.level">
                  <option selected>Select level</option>
                  <option value="100">100L</option>
                  <option value="200">200L</option>
                  <option value="300">300L</option>
                  <option value="400">400L</option>
                  <option value="500">500L</option>
                  <option value="600">600L</option>
                  <option value="700">700L</option>
                </select>
              </div>

              <div class="row mx-auto">
                 <label class="col-form-label" for="age"></label>
                <input type="number" class="form-control col-md-5" id="age" placeholder="Enter Age" v-model="students.age">
              
                 <label class="col-form-label" for="grade">Grade</label>
                <input type="number" step="0.1" class="form-control col-md-5" id="grade" placeholder="Enter Grade" v-model="students.grade">
              
              </div>
           <div class="text-center">
        <button class="btn btn-indigo">Add <i class="fa fa-plus ml-1"></i></button>
    </div>

          </form>
      </div>
      <!--/card -->

      </div>
      </div>
                    
  </div> <!--end main -->

 </div>
  </div>
</template>

<script>

export default {
  name: 'add',
  data () {
    return {
     students: {}
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
    updateStudent(e){
    if(!this.students.name || !this.students.department || !this.students.matriculation_number || !this.students.level || !this.students.grade || !this.students.age ){
      console.log('Please fill the required fields')
    } else {
      let editStudent = {
        name: this.students.name,
        department: this.students.department,
        mat_number: this.students.matriculation_number,
        level: this.students.level,
        age: this.students.age,
        grade: this.students.grade

      }

      this.$http.put('http://localhost:1000/student/'+ this.$router.params.id, editStudent)
        .then(function(response){
          this.$router.push({path: '/' , query: {alert: 'Student profile updated!'} })
        });
       e.preventDefault();
    }
      e.preventDefault();
    }
  },
  created:  function(){
      this.fetchStudent(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
