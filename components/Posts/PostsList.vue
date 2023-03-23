<template>
  <section class="post-list">
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
  </section>
</template>

<script>
import PostsPreview from "@/components/Posts/PostsPreview.vue";
export default {
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
