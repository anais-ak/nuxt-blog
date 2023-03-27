<template>
  <div class="posts-page">
    <PostsList :posts="postList" />
  </div>
</template>

<script lang="ts">
import PostsList from "@/components/Posts/PostsList.vue";
import { PostI } from "~/types";
import { getAllPosts } from "@/utils/mocks/PostMock";
export default {
  components: { PostsList },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          postList: getAllPosts(3),
        });
      }, 1000);
    }).then((data) => data);
  },
  methods: {
    // onLoadPost() {
    //   this.$router.push("/posts/" + this.id);
    // },
  },
  layout: "posts",
};
</script>
