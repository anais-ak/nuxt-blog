<template>
  <div class="posts-page">
    <PostsList />
  </div>
</template>

<script>
import PostsList from "@/components/Posts/PostsList.vue";
export default {
  components: { PostsList },
  data() {
    return {
      id: 1,
    };
  },
  methods: {
    onLoadPost() {
      this.$router.push("/posts/" + this.id);
    },
  },
  layout: "posts",
};
</script>
