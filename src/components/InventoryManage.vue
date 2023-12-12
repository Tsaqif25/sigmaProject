<template>
  <div class="full-bungkus">
    <nav id="sidebar">
      <div class="sidebar-header">
        <h3 class="text-center">
          <img src="../assets/03. Foto Profil IG.png" class="" /> <br />
          <span>Sigma Company</span>
        </h3>
      </div>
      <ul class="list-unstyled components">
        <li class="">
          <a href="#" class="dashboard"
            ><i class="material-icons">dashboard</i> <span>Dashboard</span></a
          >
        </li>

        <li class="active">
          <a href="#" class="dashboard"
            ><i class="material-symbols-outlined"> description </i> <span>History</span></a
          >
        </li>
        <li class="">
          <a href="#" class="dashboard"
            ><i class="material-icons">dashboard</i> <span>Dropdown</span></a
          >
        </li>
      </ul>
    </nav>

    <div id="content">
      <div class="navbar-horizontal">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <span class="material-symbols-outlined"> search </span>
          </li>
          <li class="nav-item">
            <span class="material-symbols-outlined"> notifications </span>
          </li>
        </ul>
      </div>

      <div class="main-content">
        <div class="row">
          <div class="col-md-12">
            <h1>Inventory Manage</h1>
            <div class="table-title bg-light">
              <div class="topnav">
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />

                <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
                  <a href="#home">Home ></a>
                  <a href="#Manage">Manage ></a>
                  <a class="active" href="#Inventory"><b>Inventory</b></a>
                  <div class="search-container">
                    <form action="/action_page.php">
                      <input type="text" placeholder="Cari Barang" name="search" />
                      <button type="submit">Submit</button>
                    </form>
                  </div>
                </nav>
              </div>

              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 40
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 12
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 34
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 44
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 8
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 49
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 17
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 25
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 41
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 32
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 22
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 15
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 9
                </button>
                <button type="button" class="list-group-item list-group-item-action">
                  Lorem Ipsum 10
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Style the navbar */
.topnav {
  overflow: hidden;
  background-color: #e9e9e9;
}

/* Navbar links */
.topnav a {
  float: left;
  display: block;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Navbar links on mouse-over */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Active/current link */
.topnav a.active {
  background-color: #e6e6e6;
  color: rgb(0, 0, 0);
}

/* Style the input container */
.topnav .search-container {
  float: right;
}

/* Style the input field inside the navbar */
.topnav input[type='text'] {
  padding: 6px;
  margin-top: 8px;
  font-size: 17px;
  border: none;
}

/* Style the button inside the input container */
.topnav .search-container button {
  float: right;
  padding: 6px;
  margin-top: 8px;
  margin-right: 16px;
  background: #ddd;
  font-size: 17px;
  border: none;
  cursor: pointer;
}

.topnav .search-container button:hover {
  background: #ccc;
}

/* Add responsiveness - On small screens, display the navbar vertically instead of horizontally */
@media screen and (max-width: 600px) {
  .topnav .search-container {
    float: none;
  }
  .topnav a,
  .topnav input[type='text'],
  .topnav .search-container button {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 14px;
  }
  .topnav input[type='text'] {
    border: 1px solid #ccc;
  }
}

.breadcrumb-item:not(.active)::after {
  content: ' > ';
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
</style>
