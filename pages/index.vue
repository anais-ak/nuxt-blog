<template>
  <div class="welcome">
    <section class="introduction">
      <h1>Latest news</h1>
    </section>
    <PostsList :posts="postList" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostsList from "@/components/Posts/PostsList.vue";
import { getAllPosts } from "@/utils/mocks/PostMock";

export default Vue.extend({
  name: "IndexPage",
  components: {
    PostsList,
  },

  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          postList: getAllPosts(3),
        });
      }, 1000);
    }).then((data) => data);
  },
});
</script>

<style scoped>
.introduction {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/img/unsplash.jpg");
  background-position: center;
  background-size: cover;
}

.introduction h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  padding: 10px;
}

@media (min-width: 768px) {
  .introduction h1 {
    font-size: 2rem;
  }
}
</style>
