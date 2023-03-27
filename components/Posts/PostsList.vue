<template>
  <section class="post-list">
    <PostsPreview
      v-for="post in posts"
      :key="post.id"
      :is-admin="true"
      :post="post"
    />
  </section>
</template>

<script lang="ts">
import PostsPreview from "@/components/Posts/PostPreview.vue";
import { PropType } from "vue";
import { PostI } from "@/types";
import { getAllPosts } from "@/utils/mocks/PostMock";
export default {
  props: {
    posts: {
      type: Array as PropType<PostI[]>,
      required: true,
    },
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
