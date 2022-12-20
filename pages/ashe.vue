<template>
  <div class="mt-5 md:mt-8">
    <div class="flex flex-row w-full items-center">
      <img src="/images/ashe_profile.jpeg" alt="Ashe" class="inline-block h-36 w-36 sm:w-44 sm:h-44 md:h-52 md:w-52 rounded-full" />
      <div class="w-full h-full text-center sm:text-right p-0 sm:pr-8 md:pr-12">
        <h1 class="text-6xl w-full">Ashe</h1>
        <span class="hidden lg:block text-white text-sm mr-1 mt-1">Our little PupPup</span>
      </div>
    </div>

    <Divider class="mt-8 mb-8" />

    <div class="pt-10 mx-1.5">
      <AsheFeed />
    </div>

    <Divider class="mb-12 -mt-5" />

    <AsheStats />

    <Divider class="mb-12 -mt-5" />

    <AshePhotos />
  </div>
</template>
