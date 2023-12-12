<template>
  
    <div class="row align-items-center justify-content-center">
      <div class="mr-5 col-6">
        <p class="text-center judul1">
          <img src="../assets/03. Foto Profil IG.png" width="100" alt="" srcset=""> <br><br>
          <span>Welcome to </span> <br>
          <span class="judul2" style="color: #003F62;">sigma's company</span>
        </p>
      </div>
      <div class="col-4 ">
        <div class="mb-3">
          <h1>Login</h1>
          <p><a href="">Forgot Your Password ?</a></p>
          <br>
         
          <input type="IDPegawai" class="form-control" id="idpegawai" v-model="idpegawai" placeholder="ID Pegawai" required>
        
        </div>
        <div class="mb-3">
          <input type="password" class="form-control" id="password" v-model="password  " placeholder="password" required >
        </div>
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
  <label class="form-check-label" for="flexCheckDefault">
    Keep me logged in
  </label>
</div>
        <div class="d-flex justify-content-end"> 
        <button type="button" class="text-white" >LOGIN</button>
      </div>
      <br>
      <p class="">By clicking 'Login' you agree to our website Terms & Conditions.</p>
      </div>
    </div>
 
</template>


<script>

import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from 'axios'; 
export default {
  data() {
    return {
      idpegawai: '',
      password: ''
    };
},
methods: {
    async loginUser() {
      try {
        // Kirim permintaan login ke backend menggunakan Axios
        const response = await axios.post('/api/login', {
          idpegawai: this.idpegawai,
          password: this.password
        });

        // Jika berhasil, alihkan pengguna ke halaman beranda
        this.$router.push('/home');
      } catch (error) {
        console.error('Error logging in:', error);
        // Tampilkan pesan kesalahan jika login gagal
      }
    }
}
}
</script>

<style scoped>
.justify-content-center {
    min-height: 100vh;
}

.judul1 {
  font-family: Inter;
font-size: 24px;
font-weight: 400;
line-height: 29px;
letter-spacing: -0.011em;
text-align: left;

}

.judul1 .judul2 {
  font-family: Inter;
font-size: 40px;
font-weight: 700;
line-height: 48px;
letter-spacing: -0.011em;
text-align: left;

}

section {
    font-family: 'Inter', sans-serif; 
    font-family: 'Poppins', sans-serif;
    font-family: 'Quicksand', sans-serif;

}

button {

  width: 144px ;
height: 48px ;
padding: 8px, 16px, 8px, 16px ;
border-radius: 8px ;
justify-content : space-between  ;
background: #003F62 ;
}
button:hover {


background: #004062ca  ;

}


.judul {
    color: #575DFB;
}
</style>
