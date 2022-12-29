<script setup lang="ts">
const props = defineProps<{
  timeline: {
    id: number
    content: string
    target: string
    href: string
    date: string
    datetime: string
    icon: any
    iconBackground: string
  }[]
}>()
</script>

<template>
  <div class="flow-root">
    <ul role="list" class="mb-8">
      <li v-for="(event, eventIndex) in props.timeline" :key="event.id">
        <div class="relative pb-10">
          <span v-if="eventIndex !== props.timeline.length - 1" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
          <div class="relative flex space-x-3">
            <div>
              <span :class="[event.iconBackground, 'h-9 w-9 mt-1 rounded-full flex items-center justify-center ring-8 ring-red-500']">
                <component :is="event.icon" class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </div>
            <div class="flex min-w-0 flex-1 justify-between space-x-4 py-3 bg-red-400 px-2 rounded-lg">
              <div>
                <p class="text-sm text-gray-200">
                  {{ event.content }} <a :href="event.href" class="font-medium text-white">{{ event.target }}</a>
                </p>
              </div>
              <div class="whitespace-nowrap text-right text-sm text-gray-200">
                <time :datetime="event.datetime">{{ event.date }}</time>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

