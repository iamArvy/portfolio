<script setup lang="ts">
defineProps<{
  file: string;
}>();
</script>
<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="secondary" class="w-fit text-sm cursor-pointer">
        View Resume
        <Icon name="mdi:eye" />
      </Button>
    </DialogTrigger>
    <DialogContent class="w-full">
      <DialogHeader class="space-y-3">
        <DialogTitle>Resume</DialogTitle>
      </DialogHeader>
      <iframe :src="file" type="application/pdf" width="100%" height="500px" />
    </DialogContent>
  </Dialog>
</template>
