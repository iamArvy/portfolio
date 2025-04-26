<script setup lang="ts">
import { toast } from "vue-sonner";
import { watch, nextTick } from "vue";
import { Toaster } from "@/components/ui/sonner";

const { flashMessage, clearFlash } = useFlash();
watch(
  () => flashMessage.value,
  async (flash) => {
    await nextTick();
    if (flash?.type === "success") {
      toast.success("Success", {
        description: flash.message,
        style: { borderColor: "green", color: "green" },
      });
    } else if (flash?.type === "error") {
      toast.error("Error", {
        description: flash.message,
        style: { borderColor: "red", color: "red" },
      });
    }
    clearFlash();
  },
  { immediate: true }
);
</script>

<template>
  <Toaster />
</template>
