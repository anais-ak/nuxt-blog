<template>
  <div class="posts-page"></div>
</template>

<script>
export default {
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
