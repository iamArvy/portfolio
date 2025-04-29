<script setup lang="ts">
import { Icon } from "@iconify/vue";
const { data: certifications } = await useAsyncData("certification", () => {
  return queryCollection("certification").order("date", "ASC").all();
});
</script>
<template>
  <ul class="flex flex-col my-4 gap-4">
    <li
      v-for="item in certifications"
      :key="item.name"
      class="text-sm cursor-pointer list-disc list-inside flex justify-between"
    >
      <div class="">
        <h3 class="font-bold text-sm">{{ item.name }} ({{ item.date }})</h3>
        <div class="flex gap-1 items-center">
          <Icon icon="mdi:map-marker" inline />
          <span class="font-normal italic">{{ item.location }}</span>
        </div>
      </div>
      <Dialog>
        <DialogTrigger as-child>
          <Button size="icon" variant="ghost"
            ><Icon icon="mdi:eye" inline
          /></Button>
        </DialogTrigger>
        <DialogContent class="w-full">
          <DialogHeader class="space-y-3">
            <DialogTitle>{{ item.name }}</DialogTitle>
          </DialogHeader>
          <iframe
            :src="'https://drive.google.com/file/d/' + item.file + '/preview'"
            type="application/pdf"
            width="100%"
            height="300px"
          />
        </DialogContent>
      </Dialog>
    </li>
  </ul>
</template>
