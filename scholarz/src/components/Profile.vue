<template>
  <!--begin header -->
  <div class="profile fluid-container">
    <div class="jumbotron text-center default-color py-5">
    <h1 class="mt-3 text-white">Scholar Profile</h1>
    <p class="lead">This is the profile of an outstanding student </p>
    </div><!--end header-->
 <div class="container">
 <router-link class="btn default-color" to="/">Back </router-link>
 <button class="btn danger-color" v-on:click="deleteStudent(student._id)">Delete</button>
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
    fetchStudent(_id){
      this.$http.get('http://localhost:1000/student/'+_id)
        .then(function(response){
          this.student = (response.body);
        });
    },
    deleteStudent(_id){
      
    }

  },
  created: function(){
    this.fetchStudent(this.$route.params._id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
