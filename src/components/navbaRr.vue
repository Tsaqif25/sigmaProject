<template>
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
</template>

<script>
export default {

}
</script>

<style>
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
</style>