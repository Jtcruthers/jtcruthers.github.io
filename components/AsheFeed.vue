<script setup lang="ts">
import { AcademicCapIcon, BookOpenIcon, HomeIcon } from '@heroicons/vue/20/solid/index.js'

const timeline = [
  {
    id: 1,
    content: 'Adopted',
    target: 'and brought home',
    href: '#',
    date: 'Oct 18',
    datetime: '2022-10-18',
    icon: HomeIcon,
    iconBackground: 'b',
  },
  {
    id: 2,
    content: 'Completed',
    target: 'All basic tricks at class',
    href: '#',
    date: 'Dec 11',
    datetime: '2022-12-11',
    icon: BookOpenIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 1,
    content: 'Graduated from',
    target: 'Puppy Class 1 ',
    href: '#',
    date: 'Dec 20',
    datetime: '2022-12-20',
    icon: AcademicCapIcon,
    iconBackground: 'bg-emerald-500',
  },
]
</script>

<template>
  <div class="flow-root">
    <ul role="list" class="mb-8">
      <li v-for="(event, eventIndex) in timeline" :key="event.id">
        <div class="relative pb-10">
          <span v-if="eventIndex !== timeline.length - 1" class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
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

