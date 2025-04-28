<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@iconify/vue";
useAppTitle();
const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [{ title: "Profile", href: "/" }];
definePageMeta({
  title: "Profile",
  meta: [
    {
      name: "description",
      content: "Dashboard page description",
    },
  ],
});

const { profile } = await useAppProfile();
const { data: stacks } = await useAsyncData("stack", () => {
  return queryCollection("stack").order("name", "ASC").all();
});

const { data: experiences } = await useAsyncData("experience", () => {
  return queryCollection("experience").order("role", "ASC").all();
});

const { data: certifications } = await useAsyncData("certification", () => {
  return queryCollection("certification").order("date", "ASC").all();
});
</script>
<template>
  <div class="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
    <div class="flex flex-col lg:grid grid-cols-2">
      <div class="flex items-center gap-4">
        <NuxtImg
          :src="profile?.image"
          :alt="profile?.name"
          width="100"
          height="100"
          class="rounded-full overflow-hidden"
          placeholder
          quality="100"
          fit="cover"
        />
        <div class="flex flex-col">
          <h1 class="text-lg lgtext-3xl font-bold">{{ profile?.name }}</h1>
          <h3 class="text-sm text-neutral">
            Web Developer, Cloud Solutions Architect and DevOps Engineer
          </h3>
        </div>
      </div>
      <p class="text-sm lg:text-base p-2">{{ profile?.bio }}</p>
    </div>
    <div class="grid auto-rows-min gap-4 md:grid-cols-3">
      <SectionMain>
        <template #title> Certifications </template>
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
              <AccordionTrigger
                >{{ item.name }} ({{ item.date }})</AccordionTrigger
              >
              <AccordionContent>
                <NuxtLink
                  :to="item.location_url"
                  class="flex gap-1 items-center hover:underline"
                >
                  <Icon icon="mdi:map-marker" inline />
                  <span>{{ item.location }}</span>
                </NuxtLink>
                <p>{{ item.description }}</p>
                <Button size="sm" class="text-[12px]">
                  Download Certificate
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </SectionMain>
      <SectionMain>
        <template #title> Stacks </template>
        <div class="flex flex-wrap gap-4 justify-center my-4">
          <StackComponent
            v-for="item in stacks"
            :key="item.name"
            :skill="item"
          />
        </div>
      </SectionMain>
      <SectionMain>
        <template #title> Experience </template>
        <div class="flex flex-col my-4">
          <Accordion
            type="single"
            collapsible
            :default-value="experiences?.[0].role"
          >
            <AccordionItem
              v-for="item in experiences"
              :key="item.role"
              :value="item.role"
            >
              <AccordionTrigger
                >{{ item.role }} ({{ item.date }})</AccordionTrigger
              >
              <AccordionContent>
                <div class="flex gap-2 items-center">
                  <Icon icon="mdi:map-marker" inline />
                  <span>{{ item.location }}</span>
                </div>
                <ul class="list-disc list-decimal">
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
      </SectionMain>
    </div>
  </div>
</template>
