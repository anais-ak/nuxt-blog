<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/posts/add')">Create</AppButton>
    </section>
    <section class="existing-posts">
      <h1>List of posts</h1>
      <PostsList :posts="postList" />
    </section>
  </div>
</template>

<script>
import PostsList from "@/components/Posts/PostsList.vue";
import AppButton from "@/components/UI/AppButton.vue";
import { getAllPosts } from "@/utils/mocks/PostMock";

export default {
  layout: "admin",
  components: {
    PostsList,
    AppButton,
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
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
