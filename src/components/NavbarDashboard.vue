<template>
<nav id="sidebar">
    <div class="sidebar-header">
        <h3 class="text-center">
            <img src="../assets/03. Foto Profil IG.png" class="" /> <br />
            <span>Sigma Company</span>
        </h3>
    </div>
    <ul class="list-unstyled components">
        <li class="">
            <!-- <a href="#" class="dashboard"><i class="material-icons">dashboard</i> <span>Rental</span></a> -->
            <router-link to="/Dashboard" class="" active-class="active"><i class="material-icons">logout </i>  Rental</router-link>
        </li>

        <li class="">
            <!-- <a href="#" class="dashboard"><i class="material-symbols-outlined"> description </i> <span>History</span></a> -->
            <router-link to="/rental1" active-class="active"><i class="material-icons">description</i> <span class="">History</span></router-link>
        </li>
        <li class="">
            <router-link to="tes2" active-class="active"><i class="material-icons">dashboard </i> <span>Rental</span></router-link>
        </li>
    </ul>
</nav>
</template>

<script>
export default {

}
</script>

<style scoped>
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
    text-decoration: none; 
}
#sidebar ul li .active {
    background-color: #003f62;
    border-radius: 7px;
    color: rgb(255, 255, 255);
}

#sidebar ul li a {
    padding: 5px 10px 5px 20px;
    line-height: 30px;
    font-size: 15px;
    position: relative;
    font-weight: 400;
    display: block;
    color: #200303;
    text-decoration: none; 
    /* text-transform:capitalize; */
}

#sidebar ul li a i {
    position: relative;
    margin-right: 10px;
    top: 6px;
}
</style>
