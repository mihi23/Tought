<template>
  <div class="bg-mainBg min-h-screen">
    <div class="container nav">
      <h1 class="nav__text">mihi</h1>
    </div>
    <div class="container mx-auto flex items-center flex-col quote-section border-t-2 border-secondaryColor">
      <h1 class="text-gray-50 text-2xl">[ Quote of the day ]</h1>
      <p class="text-gray-50">{{ this.qod.quote }}</p>
      <p class="text-gray-50">{{ this.qod.author }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      qod: [],
    };
  },
  mounted() {
    axios.get('https://quotes.rest/qod.json').then((response) => {
      // console.log(response.data.contents.quotes[0]);
      this.qod = response.data.contents.quotes[0];
    });
  },
};
</script>

<style lang="sass" scoped>
.nav
  @apply py-6 ml-16
  &__text
    @apply text-gray-50 text-3xl
</style>
