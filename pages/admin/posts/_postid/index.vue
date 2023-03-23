<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";
export default {
  data() {
    return {
      loadedPost: {
        author: "Anais",
        title: "Lorem ipsum",
        thumbnailLink: "",
        content: "Lorem ipsum and Lorem ipsum",
      },
    };
  },
  components: {
    AdminPostForm,
  },
};
</script>

<style></style>
