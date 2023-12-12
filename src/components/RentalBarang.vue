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
                            <nav class="navbar navbar-expand-lg bg-body-tertiary">

                                <router-link to="/facility" active-class="active">Facility</router-link>

                                <li class="nav-item">
                                    <router-link to="/" active-class="active">Inventory</router-link>
                                </li>

                            </nav>
                            <div class="meeting-room">

                                <ul class="nav">
                                    <li class="nav-item">
                                        <img src="../assets//03. Foto Profil IG.png" style="width: 150px;" alt="Meeting Room 2" />
                                    </li>
                                    <li class="nav-item p-2">
                                        <p class="text-black">Ruang meeting kapasitas 7 Orang Full AC + Proyektor
                                            <br>
                                            <span class="booked">Booked</span>
                                        </p>
                                    </li>

                                </ul>

                            </div>

                            <div class="meeting-room">

                                <ul class="nav">
                                    <li class="nav-item">
                                        <img src="../assets//03. Foto Profil IG.png" style="width: 150px;" alt="Meeting Room 2" />
                                    </li>
                                    <li class="nav-item p-2">
                                        <p class="text-black">Ruang meeting kapasitas 7 Orang Full AC + Proyektor
                                            <br>
                                            
                                          
                                              <span class="booked">Booked</span>
                                           

                                         
                                        </p>
                                    </li>

                                </ul>

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
</style>
