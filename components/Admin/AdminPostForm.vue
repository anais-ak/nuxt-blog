<template>
  <div class="post-form">
    <form @submit.prevent="">
      <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>

      <AppControlInput v-model="editedPost.title">Title</AppControlInput>

      <AppControlInput v-model="editedPost.thumbnailLink"
        >Thumbnail Link</AppControlInput
      >

      <AppControlInput control-type="textarea" v-model="editedPost.content"
        >Content</AppControlInput
      >

      <AppButton type="submit">Save</AppButton>

      <AppButton
        type="button"
        style="margin-left: 10px"
        btn-style="cancel"
        @click="onCancel"
        >Cancel</AppButton
      >
    </form>
  </div>
</template>

<script>
import AppButton from "@/components/UI/AppButton.vue";
import AppControlInput from "@/components/UI/AppControlInput.vue";

export default {
  data() {
    return {
      editedPost: this.post
        ? {
            ...this.post,
          }
        : {
            author: "Anais",
            title: "Lorem ipsum",
            thumbnailLink: "",
            content: "Lorem ipsum and Lorem ipsum",
          },
    };
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: {
    AppButton,
    AppControlInput,
  },

  methods: {
    onSave() {},
    onCancel() {
      this.$router.push("/admin");
    },
  },
};
</script>
