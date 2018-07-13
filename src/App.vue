<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <router-link :to="{name: 'Home'}">
            <li>
              <img class="img-logo" src="./data/img/marvellogo.png" alt="">
            </li>            
          </router-link>
          <router-link class="nav-link"  :to="{name: 'List'}">
          <li class="li-list">List</li>
          </router-link>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
import HomePage from './home/HomePage.vue';
import MarvelBuilder from "./build/MarvelBuilder.vue"

export default {
  name: 'app',
  components: {
    HomePage,
    MarvelBuilder
  }
}
</script>

<style>
header{
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
li {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 2px solid #bbb;
  vertical-align: center;
}
.img-logo {
  width: 80px;
  display: flex;
  margin: 0 auto;
  
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.nav-link:hover {
  color: inherit;
}


</style>
