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
            <h1>History</h1>

            <div class="table-title bg-light">
              <h2 class="text-black ml-4">Recent Order</h2>
              <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
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
                <table class="table table-hover mt-3 table-light">
                  <thead>
                    <tr>
                      <th>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked"
                          />
                          <label class="form-check-label" for="flexCheckChecked"> </label>
                        </div>
                      </th>
                      <th>Product</th>
                      <th>Order ID</th>
                      <th>Date</th>
                      <th>Customer Name</th>
                      <th>Status</th>
                      <th>QTY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="order in orders">
                      <td>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckChecked "
                          />
                          <label class="form-check-label" for="flexCheckChecked"> </label>
                        </div>
                      </td>
                      <td>{{ order.product }}</td>
                      <td>{{ order.orderId }}</td>
                      <td>{{ order.date }}</td>
                      <td>{{ order.customerName }}</td>
                      <td>{{ order.status }}</td>
                      <td>{{ order.qty }}</td>
                    </tr>
                  </tbody>
                </table>
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
  color: #ffecec;
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

<script>
export default {
  data() {
    return {
      orders: [
        {
          product: 'Lorem Ipsum',
          orderId: '25426',
          date: '8 Nov 2023',
          customerName: 'Supri',
          status: 'Dipinjam',
          qty: 1
        },
        {
          product: 'Lorem Ipsum',
          orderId: '25425',
          date: '7 Nov 2023',
          customerName: 'Yono',
          status: 'Dikembalikan',
          qty: 1
        },
        {
          product: 'Lorem Ipsum',
          orderId: '25424',
          date: '6 Nov 2023',
          customerName: 'Martono',
          status: 'Dipinjam',
          qty: 2
        },
        {
          product: 'Lorem Ipsum',
          orderId: '25423',
          date: '5 Nov 2023',
          customerName: 'Iqbal',
          status: 'Dikembalikan',
          qty: 2
        },
        {
          product: 'Lorem ipsum',
          orderId: '25422',
          date: '4 Nov 2023',
          customerName: 'Tsaqif',
          status: 'Dipinjam',
          qty: 1
        },
        {
          product: 'Lorem Ipsum',
          orderId: '25421',
          date: '3 Nov 2023',
          customerName: 'Sulistyo',
          status: 'Dipinjam',
          qty: 1
        },
        {
          product: 'Lorem Ipsum',
          orderId: '25424',
          date: '6 Nov 2023',
          customerName: 'Martono',
          status: 'Dipinjam',
          qty: 2
        },
        {
          product: 'Lorem Ipsum',
          orderId: '25424',
          date: '6 Nov 2023',
          customerName: 'Martono',
          status: 'Dipinjam',
          qty: 2
        },
        {
          product: 'Lorem Ipsum',
          orderId: '25424',
          date: '6 Nov 2023',
          customerName: 'Martono',
          status: 'Dipinjam',
          qty: 2
        },
        {
          product: 'Lorem Ipsum',
          orderId: '25424',
          date: '6 Nov 2023',
          customerName: 'Martono',
          status: 'Dipinjam',
          qty: 2
        },
        {
          product: 'Lorem Ipsum',
          orderId: '25424',
          date: '6 Nov 2023',
          customerName: 'Martono',
          status: 'Dipinjam',
          qty: 2
        },
        {
          product: 'Lorem Ipsum',
          orderId: '25424',
          date: '6 Nov 2023',
          customerName: 'Martono',
          status: 'Dipinjam',
          qty: 2
        },
        {
          product: 'Lorem Ipsum',
          orderId: '25424',
          date: '6 Nov 2023',
          customerName: 'Martono',
          status: 'Dipinjam',
          qty: 2
        }
      ]
    }
  }
}
</script>
