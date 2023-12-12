<template>
<div class="full-bungkus">
    <nabvarDashboard></nabvarDashboard>
    <div id="content">
        <navbaRr></navbaRr>
        <div>
            <div class="main-content">
                <div class="row">
                    <div class="col-md-12">
                        <h1>RENTAL</h1>
                        <nav style="--bs-breadcrumb-divider: ''" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/home">Home</router-link>
                                </li>
                                <li class="breadcrumb-item">
                                    <router-link to="/rental">Rental</router-link>
                                </li>

                            </ol>

                        </nav>

                        <div class="table-title bg-light">

                            <div class="container">
                                <div class="row text-black">
                                    <div style="width: 341px; height: 320px;" alt="">
                                        <h3>
                                            <img src="../assets//03. Foto Profil IG.png" style="width: 311px; height: 300px; top: 241px; Left
316px" alt="">
                                        </h3>
                                    </div>
                                    <div style="width: 441px; height: 427px; left:813px ; top:241px">
                                     <h1>Ruang Meeting 3</h1>
                                     <p>Ruang meeting berkapasitas 12 Orang Full AC + Proyektor</p>
                                    </div>

                                </div>
                            </div>
                            <div class="" style="margin-top: -60px ;">
 

  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">

  
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="d-flex justify-content-end ">
<button type="button" class="btn btn m-1 cancel">CANCEL</button>
<button type="button" class="btn btn-secondary btn m-1 bookedNow">BOOKED NOW</button>
</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
import nabvarDashboard from './NavbarDashboard.vue'
import navbaRr from './navbaRr.vue'
export default {
    components: {
        nabvarDashboard,
        navbaRr
    },
}
</script>

<style scoped>
ul,
ol {
    padding: 0px;
    margin: 0px;
    list-style: none;
}

a:focus {
    color: #333;
    text-decoration: none;
    transition: all 0.3s;
}

.container {
    display: flex;
    /* align-items: center;  */
}

.container img {
    margin-right: 10px;
    /* Atur jarak antara gambar dan teks */
}

.meeting-room {
    /* display: inline-block; */

    background-color: #f8f9fa;
    border: 2px solid black;
    padding: 20px;
    margin-bottom: 20px;
}

.meeting-room img {
    max-width: 100%;
    margin-left: auto
}

.available {
    color: green;
}

.booked {
    border-radius: 13px;
    color: red;
}

.rusak {
    color: black;
}

.full-bungkus {
    position: relative;
    width: 100%;
    overflow: auto;
}

a {
    color: #333;
    font-weight: 400;
}

button:focus {
    box-shadow: none;
    outline: none;
    border: none;
}

button {
    cursor: pointer;
}

ul,
ol {
    padding: 0px;
    margin: 0px;
    list-style: none;
}

a,
a:hover,
a:focus {
    color: #333;
    text-decoration: none;
    transition: all 0.3s;
}

/*=========sidebar---design------*/

#sidebar {
    position: fixed;
    height: 100% !important;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 11;
    width: 260px;
    overflow: auto;
    border-right: 3px solid #f4f4f4;
    background-color: #fafafa;
    /* box-shadow:0 0 30px 0 rgba(200 200 200 / 20%); */
}

#sidebar .sidebar-header {
    padding: 20px;
    background-color: #fafafa;

    border-bottom: 1px solid #fafafa;
}

.sidebar-header h3 {
    color: #333;
    font-size: 17px;
    margin: 0px;
    text-transform: uppercase;
    font-weight: 600;
}

.sidebar-header h3 img {
    width: 45px;
    margin-right: 10px;
}

#sidebar ul li {
    padding: 2px 0px;
}

#sidebar ul li a:hover {
    color: white;
    background-color: #003f62;
    border-radius: 7px;
}

#sidebar ul li a {
    padding: 5px 10px 5px 20px;
    line-height: 30px;
    font-size: 15px;
    position: relative;
    font-weight: 400;
    display: block;
    color: #200303;
    /* text-transform:capitalize; */
}

#sidebar ul li a i {
    position: relative;
    margin-right: 10px;
    top: 6px;
}

.navbar-horizontal {
    height: 105px;
    width: 100%;
    /* z-index:9; */
    position: relative;
    padding: 30px 30px;
    background-color: #fafafa;
}

.navbar-horizontal ul {
    align-items: center;
}

.navbar-horizontal ul li {
    justify-content: center;
    margin-right: 20px;
}

.main-content {
    padding: 30px 30px 0px 30px;
    background-color: #fefae0;
}

.table-title {
    background: #353b48;
    color: #fff;
    position: sticky;
    top: 0;
    width: 100%;
    left: 0;
    padding: 10px 30px;
    border-radius: 20px;
}

.table-title .table1 {
    background: #353b48;
    border-radius: 50px;
}

#content {
    width: calc(100% - 260px);
    position: relative;
    float: right;
}

.active {
    font-weight: bold;
    border-bottom: 3px solid #003F62;
}

.bookedNow {
    width:  164px ;
height:  48px ;
padding: 8px, 16px, 8px, 16px ;
border-radius: 8px ;
gap: 4px;
background: #003F62;


}

.cancel {
    width: 84px ;
height: 48px ;
padding: 8px, 16px, 8px, 16px ;
border-radius: 8px ;
border: 1px ;
gap: 4px ;
border: 1px solid #232321
}
</style>
