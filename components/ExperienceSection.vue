<script setup lang="ts">
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
import { Icon } from "@iconify/vue";
const { data: experiences } = await useAsyncData("experience", () => {
  return queryCollection("experience").order("role", "ASC").all();
});
</script>
<template>
  <div class="flex flex-col my-4">
    <Accordion type="single" collapsible :default-value="experiences?.[0].role">
      <AccordionItem
        v-for="item in experiences"
        :key="item.role"
        :value="item.role"
      >
        <AccordionTrigger>{{ item.role }} ({{ item.date }})</AccordionTrigger>
        <AccordionContent>
          <div class="flex gap-2 items-center">
            <Icon icon="mdi:map-marker" inline />
            <span>{{ item.location }}</span>
          </div>
          <ul>
            <li
              v-for="desc in item.description"
              :key="desc"
              class="list-disc list-inside"
            >
              {{ desc }}
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
