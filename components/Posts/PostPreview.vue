<template>
  <section class="featured-posts">
    <nuxt-link :to="postLink" class="post-preview">
      <article>
        <div
          class="post-thumbnail"
          :style="{ backgroundImage: `url(${post.thumbnail})` }"
        ></div>
        <div class="post-content">
          <h2>{{ post.title }}</h2>
          <p>{{ post.previewText }}</p>
        </div>
      </article>
    </nuxt-link>
  </section>
</template>

<script lang="ts">
import { PropType } from "vue";
import { PostType } from "@/types";
export default {
  name: "PostPreview",
  props: {
    post: {
      type: Object as PropType<PostType>,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    postLink(): string {
      return this.isAdmin
        ? `/admin/post/${this.post.id}`
        : `/post/${this.post.id}`;
    },
  },
};
</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>
