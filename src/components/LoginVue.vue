<template>
<section id="contact">
<div class="container-lg my-5 ">

 
<div class="row justify-content-center align-items-center d-flex my-5">
  <div class="col-lg-5">
    <h1>Tsaqif</h1>
    <form>
    
  <div class="mb-3">
    <h4 class=" text-center mt-2"> <span class="judul">Login To Your Account </span></h4>
    <br>
    <label for="exampleInputEmail1" class="form-label">Email address</label>
  <div class="mb-4 input-group">
<span class="input-group-text">
  <i class="bi bi-person-circle"></i> 
</span>
<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username/email">
    </div>
   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <div class="mb-4 input-group">
<span class="input-group-text">
  <i class="bi bi-lock"></i>
</span>
<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
   
  </div>
  

  <button :class="['btn', 'btn-primary', 'col-12', {'btn-block': isFullWidth}]" type="submit" class="mb-3">
            <span class="text-center">Submit</span>
          </button>
</form>
</div>


   
  </div>

  

  </div>



</section>



</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
export default {
  name:'LoginVue'
}
</script>

<style scoped>
.justify-content-center {
    min-height: 80vh ;
  }
section {
  font-family: 'Inter', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Quicksand', sans-serif;

}
button  {
  background-color: #575DFB;

}

.judul {
 color: #575DFB;
}
</style>