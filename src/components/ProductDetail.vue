<template>
<div class="full-bungkus ">
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3 class="text-center"><img src="../assets/03. Foto Profil IG.png" class="" /> <br>
                <span>Sigma Company</span></h3>
        </div>
        <ul class="list-unstyled components">
            <li class="">
                <a href="#" class="dashboard"><i class="material-icons">dashboard</i>
                    <span>Dashboard</span></a>
            </li>

            <li class="active">
                <a href="#" class="dashboard"><i class="material-symbols-outlined">
                        description
                    </i> <span>History</span></a>
            </li>
            <li class="">
                <a href="#" class="dashboard"><i class="material-icons">dashboard</i>
                    <span>Dropdown</span></a>
            </li>

        </ul>

    </nav>

    <div id="content">
        <div class="navbar-horizontal">
            <ul class="nav justify-content-end">

                <li class="nav-item">
                    <span class="material-symbols-outlined">
                        search
                    </span>
                </li>
                <li class="nav-item">
                    <span class="material-symbols-outlined">
                        notifications
                    </span>
                </li>

                <li class="nav-item">

                </li>
            </ul>
        </div>

        <div class="main-content">
            <div class="row">

                <div class="col-md-12 conte1">
                    <h1>History</h1>

                    <div class=" bg-light conte2">
                        <h2 class="text-black ml-4">Recent Order</h2>
                        <nav style="--bs-breadcrumb-divider:'>' ;" aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <router-link to="/">Home</router-link>
                                </li>
                                <li class="breadcrumb-item active">
                                    <router-link to="/">History</router-link>
                                </li>
                            </ol>
                        </nav>
                        <div class="row">
                            <div class=" col1">
                                <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1">
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1">
                                    </div>
                                    <div class="row">
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="First name" aria-label="First name">
                                        </div>
                                        <div class="col">
                                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
<br>
                                </form>

                            </div>
                            <div class=" col2">
                                <div class="container">
  <h2>Product Gallery</h2>
  <div class="row">
    <div class="col-md-3">
      <div class="card">
        <img src="thumbnail1.jpg" class="card-img-top" alt="Image Thumbnail 1">
        <div class="card-body">
          <h5 class="card-title">Image Title 1</h5>
          <p class="card-text">Image Description 1</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <img src="thumbnail2.jpg" class="card-img-top" alt="Image Thumbnail 2">
        <div class="card-body">
          <h5 class="card-title">Image Title 2</h5>
          <p class="card-text">Image Description 2</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <img src="thumbnail3.jpg" class="card-img-top" alt="Image Thumbnail 3">
        <div class="card-body">
          <h5 class="card-title">Image Title 3</h5>
          <p class="card-text">Image Description 3</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="card">
        <img src="thumbnail4.jpg" class="card-img-top" alt="Image Thumbnail 4">
        <div class="card-body">
          <h5 class="card-title">Image Title 4</h5>
          <p class="card-text">Image Description 4</p>
        </div>
      </div>
    </div>
  </div>
</div>

                            </div>

                         
                        </div>
                        <div>
                        <ul class=" button1 d-flex justify-content-end  ">
                            <button type="button" class="btn   " style="background-color: #003F62; color: white;">Update</button> 
                            <button type="button" class="btn btn-danger">Cancel</button>
                            <button type="button" class="btn" style="border: 2px solid black;">Cancel</button>
                        </ul>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.breadcrumb-item:not(.active)::after {
    content: " > ";
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
h2,
.h3,
.h4 {
    font-weight: 400;
    line-height: 1.5em;
}

p {
    font-size: 15px;
    margin: 12px 0 0;
    line-height: 24px;
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

.full-bungkus {
    position: relative;
    width: 100%;
    overflow: auto;
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
    background-color: #FAFAFA;
    /* box-shadow:0 0 30px 0 rgba(200 200 200 / 20%); */
}

#sidebar .sidebar-header {
    padding: 20px;
    background-color: #FAFAFA;

    border-bottom: 1px solid #FAFAFA;
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
    background-color: #003F62;
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
    background-color: #FAFAFA;
}

.navbar-horizontal ul {
    align-items: center;
}

.navbar-horizontal ul li {
    justify-content: center;
    margin-right: 20px;
}

.conte1 {

    border-radius: 20px;

    background-color: #FEFAE0;
}

.conte2 {
    padding: 15px;
    border-radius: 20px;
    width: 930px;
}

#content {
    width: calc(100% - 260px);
    position: relative;
    float: right;

}

.row .col1 {

    width: 456px;
}

.row .col2 {
    width: 450px;
}

 .button1 button {
    margin-left: 13px;
}
</style>

<script>
export default {

    data() {
        return {
            orders: [{
                    product: "Lorem Ipsum",
                    orderId: "25426",
                    date: "8 Nov 2023",
                    customerName: "Supri",
                    status: "Dipinjam",
                    qty: 1,
                },

            ],
        };
    },
}
</script>
