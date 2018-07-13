<template>
  <div class="home">
    <img src="../data/img/marvelhome.png" alt="">
  </div>
  
</template>

<script>
var md5 = require('js-md5');

export default {
  name: 'HomePage',
  data() {
    return {
      key: "hier komt de hash",
      example: "example",
    };
  },
  methods: {
    createHash() {
      var publicKey = "405a421d6f8b64ae665c3a8f820f4d3e";
      var privateKey = "f84e241e002c0f42e784d513210ab23b9a452870";
      this.example = "1"+privateKey+publicKey;      
      this.key = md5("1"+privateKey+publicKey);
    }
  }
  
}
</script>

<style scoped>
  img {
    display: flex;
    margin: 0 auto;
  }
  .home {
    margin: 0px;
    padding: 0px;
  }
</style>
