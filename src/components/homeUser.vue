<template>
    <navbaRr></navbaRr> 
   <div class="jumbotron">
     <div class="container">
       <br><br><br><br><br><br>
     <h1 class="display-4 judul text-center d-flex justify-content-center  mb-4"> Welcome to Our Sigma's <br> Company Website</h1>
   
     <p class="tulisan">Every project is an opportunity to create meaningful change</p>
     <br><br>
     <div class="d-flex justify-content-center">
      <router-link to="/rental" class="btn button text-white">  Get Started</router-link>
     </div>
   
   </div>
   </div>
   </template>
   
   <script>
   import axios from 'axios'; 
   import navbaRr from './navbaRr.vue'
   
   
   export default {
     components : {
   
     navbaRr 
   },
       data() {
       return {
         username: '' // Inisialisasi dengan nama pengguna yang berhasil login
       };
     },
     methods: {
       redirectToDashboard() {
         // Implement logic to redirect to the dashboard or desired page
         // For example:
         this.$router.push('/');
       }
     },
     mounted() {
     // Ambil data pengguna dari backend menggunakan Axios
     axios.get('')
       .then(response => {
         this.username = response.data.username; // Simpan nama pengguna ke variabel username
       })
       .catch(error => {
         console.error('Error fetching user data:', error);
       });
     }
   }
   </script>
   
   <style >
   .jumbotron {
     height: 90vh;
     background-color: rgb(220, 216, 216);
     text-align: center;
   }
   
   
   
   h1 .judul {
     margin-top: -200px;
     font-family: Lato;
   font-size: 80px;
   font-weight: 700px;
   line-height: 96px;
   letter-spacing: 0.01em;
   text-align: center;
   background: #06040A;
   }
   .button {
    display: flex;
    justify-content: center;
    align-items: center;
     width: 222px ;
   height: 66px ;
   top: 609px ;
   left: 609px ;
   padding: 24px, 56px, 24px, 56px ;
   border-radius: 40px ;
   gap: 10px ;
   margin-bottom: 14px;
    background: #003F62;
   ;
   
   }
   
   .button:hover {
     background: #2792cb;
   }
   
   .tulisan {
     font-family: Lato;
   font-size: 23px;
   font-style: italic;
   font-weight: 400;
   line-height: 32px;
   letter-spacing: 0em;
   text-align: center;
   
   }
   </style>