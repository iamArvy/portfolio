<script setup lang="ts">
import { contact, socials } from '~/constants';

</script>

<template>
  <SectionLayout title="Get in touch" description="Feel free to reach out for collaborations or just a friendly chat.">
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <ContactItem v-for="(item, index) in contact" :key="index" :item="item"
        :style="{ animationDelay: `${index * 100}ms` }" />
      <ContactItem v-for="(item, index) in socials" :key="index" :item="item"
        :style="{ animationDelay: `${index * 100}ms` }" />
    </div>
  </SectionLayout>
</template>