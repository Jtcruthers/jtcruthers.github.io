<script setup lang="ts">
interface NuxtError extends Error {
  statusCode: number
  message: string
}

const props = defineProps<{ error: NuxtError}>()
const { statusCode } = props.error

const message = statusCode === 404 ? "Please check the URL in the address bar and try again." : "Hmmm something bad seems to have happened. Sorry about that."
const title = statusCode === 404 ? "Page not found" : "Error"
</script>

<template>
  <div class="min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
    <div class="mx-auto max-w-max">
      <main class="sm:flex">
        <p class="text-4xl font-bold tracking-tight text-teal-300 sm:text-5xl">{{ statusCode }}</p>
        <div class="sm:ml-6">
          <div class="sm:border-l sm:border-gray-200 sm:pl-6">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-5xl">{{ title }}</h1>
            <p class="mt-1 text-base text-teal-200">{{ message }}</p>
          </div>
          <div class="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
            <NuxtLink to="/">
              <a href="/" class="inline-flex items-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Go back home</a>
            </NuxtLink>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
