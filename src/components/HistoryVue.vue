<template>
    <div class="row">
        <div class="col-2 a">
            <ul class="nav flex-column ">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                        <p class="mt-3 text-center">
    
                            <img src="../assets/LOGO UNIVERSITAS NEGERI PADANG.png" width="70px" height="70" alt="" srcset="" />
                        </p>
                    </a>
                </li>
                <li class="nav-item ml-4">
                    <a class="nav-link"><i class="bi bi-speedometer2"></i>Dashboard</a>
                </li>
                <li class="nav-item ml-auto">
                    <a class="nav-link"><i class="bi bi-hourglass"></i>History</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link">Manage</a>
                </li>
            </ul>
        </div>
        <div class="col-10 navbar-horizontal">
            <ul class="nav justify-content-end icon-button">
                <li class="icon mr-5">
                    <i class="bi bi-search ml-3"></i>
                    <i class="bi bi-bell-fill ml-3"></i>
                </li>
                <div class="icon-button">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admin
                        </button>
                    </div>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </ul>
    
            <br />
            <div class="container">
                <div class=" container col-12 mt-5">
                    <h1>History</h1>
    
                    <div class="row justify-content-center">
    
                        <h1 class="">Recent Orders</h1>
                        <hr>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
                                            <label class="form-check-label" for="flexCheckChecked">
                                                
                                            </label>
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
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked " >
                                            <label class="form-check-label" for="flexCheckChecked">
                                              
                                            </label>
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
    </template>
    
      
    <script>
    import 'bootstrap-icons/font/bootstrap-icons.css';
    export default {
        name:'HistoryVue' ,
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
                    {
                        product: "Lorem Ipsum",
                        orderId: "25425",
                        date: "7 Nov 2023",
                        customerName: "Yono",
                        status: "Dikembalikan",
                        qty: 1,
                    },
                    {
                        product: "Lorem Ipsum",
                        orderId: "25424",
                        date: "6 Nov 2023",
                        customerName: "Martono",
                        status: "Dipinjam",
                        qty: 2,
                    },
                    {
                        product: "Lorem Ipsum",
                        orderId: "25423",
                        date: "5 Nov 2023",
                        customerName: "Iqbal",
                        status: "Dikembalikan",
                        qty: 2,
                    },
                    {
                        product: "Lorem ipsum",
                        orderId: "25422",
                        date: "4 Nov 2023",
                        customerName: "Tsaqif",
                        status: "Dipinjam",
                        qty: 1,
                    },
                    {
                        product: "Lorem Ipsum",
                        orderId: "25421",
                        date: "3 Nov 2023",
                        customerName: "Sulistyo",
                        status: "Dipinjam",
                        qty: 1,
                    },
                ],
            };
        },
    }
    </script>
    
      
    <style>
    .navbar-vertical {
        height: 96px;
        width: 100%;
    }
    
    .a {
        background-color: red;
        height: 803px;
    }
    
    .b {
        background-color: rgb(15, 205, 205);
    }
    
    .icon {
        display: flex;
        align-items: center;
    }
    
    .icon-button {
        margin-top: auto;
        align-items: flex-start;
        /* Tambahkan ini untuk membuat kontennya rata atas */
    }
    
    /* Tambahkan gaya berikut untuk mengatur ikon ke tengah vertikal */
    .icon-button .icon {
        display: flex;
        align-items: center;
    }
    
    .navbar-horizontal {
        height: 96px;
        width: 100%;
        background-color: blue;
    }
    </style>
    