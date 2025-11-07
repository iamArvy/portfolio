<script setup lang="ts">
// import { onMounted, nextTick } from 'vue';
// import { useRoute } from 'vue-router';

// const route = useRoute();

// onMounted(async () => {
//   await nextTick();
//   if (route.hash) {
//     const el = document.querySelector(route.hash);
//     if (el) el.scrollIntoView({ behavior: 'smooth' });
//   }
// });
const isOpen = useState("sidebarOpen", () => true);

</script>

<template>
  <SidebarProvider :default-open="isOpen">
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" as-child>
              <NuxtLink to="/">
                <AppLogo />
              </NuxtLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <AppNav />
      </SidebarContent>
    </Sidebar>
    <SidebarInset>
      <AppSidebarHeader class="sticky top-0 z-50 bg-background rounded-t-md" />
      <div>
        <slot />
      </div>
      <!-- <div class="flex h-full flex-1 flex-col relative overflow-y-auto">
        <div class="absolute flex-1 h-full flex flex-col gap-4 p-2 w-full"> -->
      <!-- </div>
      </div> -->
    </SidebarInset>
  </SidebarProvider>
</template>
