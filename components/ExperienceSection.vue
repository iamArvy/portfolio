<script setup lang="ts">
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "@/components/ui/accordion";
import { Icon } from "@iconify/vue";
const { experiences } = useContent();
</script>
<template>
  <div class="flex flex-col my-4">
    <Accordion type="single" collapsible :default-value="experiences?.[0].role">
      <AccordionItem
        v-for="item in experiences"
        :key="item.role"
        :value="item.role"
      >
        <AccordionTrigger>
          <div class="flex flex-col gap">
            <h3>{{ item.role }} ({{ item.date }})</h3>
            <div class="flex gap-1 items-center">
              <Icon icon="mdi:map-marker" inline class="text-sidebar-primary" />
              <span class="font-normal italic">{{ item.location }}</span>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <ul>
            <li
              v-for="desc in item.description"
              :key="desc"
              class="list-disc list-inside text-sm"
            >
              {{ desc }}
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
