<script setup lang="ts">
import { Icon } from "@iconify/vue";
const { data: certifications } = await useAsyncData("certification", () => {
  return queryCollection("certification").order("date", "ASC").all();
});
</script>
<template>
  <div class="flex flex-col my-4">
    <Accordion
      type="single"
      collapsible
      :default-value="certifications?.[0].name"
    >
      <AccordionItem
        v-for="item in certifications"
        :key="item.name"
        :value="item.name"
      >
        <AccordionTrigger>{{ item.name }} ({{ item.date }})</AccordionTrigger>
        <AccordionContent>
          <NuxtLink
            :to="item.location_url"
            class="flex gap-1 items-center hover:underline"
          >
            <Icon icon="mdi:map-marker" inline />
            <span>{{ item.location }}</span>
          </NuxtLink>
          <p>{{ item.description }}</p>
          <Button size="sm" class="text-[12px]"> Download Certificate </Button>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
