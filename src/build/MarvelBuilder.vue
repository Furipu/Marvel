<template>
<div class="MarvelBuilder container">
    <table class="table">
       <thead>
           <tr>
               <th scope="col">name</th>
               <th scope="col">image</th>
               <th scope="col">description</th>
           </tr>
       </thead>
       <tbody>
           <tr v-for="character in characters.data.results" :key="character.id" @click="getDetails">
               <th scope="row">{{ character.name }}</th>
               <td><img :src="createImagePath(character.thumbnail.path)"></td>  
               <td class="description">{{ character.description }}</td>
           </tr>
       </tbody>
    </table>
</div>
</template>

<script>
var md5 = require("js-md5");
import characters from "../data/characters";

export default {
  name: "MarvelBuilder",
  data() {
    return {
      characters,
      key: "",
      timestamp: 1,
      finalPath: "",
    };
  },

  methods: {
    createImagePath(path) {
      return (
        String(path) + "/portrait_small.jpg"
      );
    },
    createHash(path) {
      var publicKey = "405a421d6f8b64ae665c3a8f820f4d3e";
      var privateKey = "f84e241e002c0f42e784d513210ab23b9a452870";
      this.key = md5(this.timestamp + privateKey + publicKey);
      this.timestamp += 1;
      this.finalPath =
        path +
        "?ts=" +
        this.timestamp +
        "&apikey=" +
        publicKey +
        "&hash=" +
        this.key;
      return this.finalPath;
    }
  }
};
</script>

<style>
.description {
  word-wrap: break-word;
}
</style>


