<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  layout: "admin",
  components: {
    AdminPostForm,
  },
  methods: {
    onSave() {},
    onCancel() {
      this.$router.push("/admin");
    },
  },
};
</script>
