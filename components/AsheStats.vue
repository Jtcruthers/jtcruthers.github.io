<script setup lang="ts">
const props = defineProps<{
  stats: {
    name: string
    value: string
  }[]
}>()
</script>

<template>
    <div class="mt-10 pb-12 sm:pb-16">
      <div class="relative">
        <div class="absolute inset-0 h-1/2" />
        <div class="relative">
          <div class="max-w-4xl">
            <dl class="rounded-lg bg-red-400 shadow-lg sm:grid sm:grid-cols-3">
              <div v-for="(stat, index) in props.stats" class="flex flex-col border-b border-teal-300 p-6 text-center sm:border-0" :class="index === 0 ? 'sm:border-r' : index === (props.stats.length - 1) ? 'sm:border-l' : 'sm:border-l sm:border-r'">
                <dt class="order-2 mt-2 text-lg font-medium leading-6 text-white">{{ stat.name }}</dt>
                <dd class="order-1 text-5xl font-bold tracking-tight text-teal-300">{{ stat.value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
</template>
