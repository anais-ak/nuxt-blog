<template>
  <section class="post-list">
    <PostsPreview :is-admin="isAdmin" :post="post" />
    <PostsPreview :is-admin="isAdmin" :post="post" />
    <PostsPreview :is-admin="isAdmin" :post="post" />
    <PostsPreview :post="post" />
  </section>
</template>

<script>
import PostsPreview from "@/components/Posts/PostPreview.vue";
export default {
  data() {
    return {
      isAdmin: "isAdmin",
      post: {
        id: "1",
        thumbnail:
          "https://imageio.forbes.com/specials-images/dam/imageserve/1171238184/0x0.jpg?format=jpg&width=1200",
        previewText: "Lorem ipsum dolor sit amet",
        title: "Title",
      },
    };
  },
  name: "PostsList",
  components: {
    PostsPreview,
  },
};
</script>

<style scoped>
.post-list-container {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
