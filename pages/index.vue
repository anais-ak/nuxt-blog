<template>
  <div class="welcome">
    <section class="introduction">
      <h1>Latest news</h1>
    </section>
    <PostsPreview
      id="1"
      thumbnail="https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&width=1200"
      previewText="Lorem ipsum dolor sit amet"
      title="Title"
    />
    <PostsPreview
      id="1"
      thumbnail="https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&width=1200"
      previewText="Lorem ipsum dolor sit amet"
      title="Title"
    />
    <PostsPreview
      id="1"
      thumbnail="https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&width=1200"
      previewText="Lorem ipsum dolor sit amet"
      title="Title"
    />
    <PostsPreview
      id="1"
      thumbnail="https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&width=1200"
      previewText="Lorem ipsum dolor sit amet"
      title="Title"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import PostsPreview from "~/components/Posts/PostsPreview.vue";

export default Vue.extend({
  name: "IndexPage",
  components: {
    PostsPreview,
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
  background-color: rgba(211, 211, 211, 0.2);
  padding: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .introduction h1 {
    font-size: 2rem;
  }
}
</style>
