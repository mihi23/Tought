<template>
	<div class="bg-mainBg min-h-screen">
		<div class="container nav">
			<h1 class="nav__text">mihi</h1>
			<h1></h1>
		</div>
		<div class="quoteSection" :class="showQuote ? 'h-40' : 'h-24'">
			<h1 @click="toggleQuote" class="quoteSection__heading">[ Quote of the day ]</h1>
			<transition name="quote">
				<div v-if="showQuote && qod" class="quoteSection__quote-holder">
					<p class="quoteSection__quote">{{ qod.quote }}</p>
					<p class="quoteSection__author">{{ qod.author }}</p>
				</div>
			</transition>
		</div>
		<div class="addTought">
			<form class="addTought__form" action="">
				<div>
					<Textarea class="addTought__input" v-model="value" :autoResize="true" rows="1" cols="10" placeholder="Write down your tought" />
				</div>
				<button class="addTought__btn">btn</button>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import Textarea from 'primevue/textarea';
export default {
	data() {
		return {
			qod: null,
			showQuote: false,
		};
	},
	components: {
		Textarea,
	},
	methods: {
		toggleQuote() {
			this.showQuote = !this.showQuote;
		},
	},
	mounted() {
		axios.get('https://quotes.rest/qod.json').then((response) => {
			// console.log(response.data.contents.quotes[0]);y
			this.qod = response.data.contents.quotes[0];
		});
	},
};
</script>

<style lang="sass" scoped>
.nav
  @apply py-6 ml-16
  &__text
    @apply text-gray-50 text-3xl font-roboto

.quoteSection
    @apply container mx-auto flex flex-col  border-secondaryColor py-4 font-roboto duration-500
    &__heading
      @apply text-secondaryColor text-2xl cursor-pointer pb-1
    &__quote
      @apply text-gray-50 text-2xl py-1
    &__author
      @apply text-gray-50

.quote-enter-active
  transition: all 0.3s ease-out
.quote-leave-active
  transition: all 0.15s cubic-bezier(1, 0.5, 0.8, 1)
.quote-enter-from,
.quote-leave-to
  transform: translateY(-30px)
  opacity: 0

.addTought
  @apply container mx-auto flex justify-center
  &__form
    @apply flex flex-col
  &__input
    @apply bg-mainBg placeholder:text-textColor placeholder:text-xl w-60
</style>
