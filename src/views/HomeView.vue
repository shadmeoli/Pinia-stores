<template>
  <h2 class="text-center mt-16 pt-16">Vue Todo App</h2>
  <h5 class="text-center mt-1">What's on your mind today?</h5>
  <div class="d-flex justify-center align-center">
    <AddItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import AddItem from '../components/AddItem.vue';


export default defineComponent({
  name: 'HomeView',

  components: {
    AddItem,
  },
});
</script>
