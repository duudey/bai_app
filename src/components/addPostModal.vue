<template>
  <div class="addPostModal">
    <!-- Using modifiers -->
    <b-button v-b-modal.postModal>Dodaj post</b-button>
    <!-- The modal -->
    <b-modal id="postModal">Hello From My Modal()</b-modal>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue';

export default {
  name: "addPostModal",
  components: {BButton},
  methods: {
    showModal() {
      console.log("modal działa");
    }
  },
};
</script>

<style lang='scss' scoped>
</style>