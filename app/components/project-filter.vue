<script setup lang="ts">
import { Filter } from 'lucide-vue-next'
import { useProjectFilter } from '~/composables/useProjectFIlter';

const globalFilters = useProjectFilter()
const tempFilters = ref({ ...globalFilters.value })

const { data: stacks } = await useAsyncData('stacks', () =>
  queryCollection('stack').all()
)

const toggleStack = (slug: string) => {
  const current = tempFilters.value.stack || []
  if (current.includes(slug)) {
    tempFilters.value.stack = current.filter((s) => s !== slug)
  } else {
    tempFilters.value.stack = [...current, slug]
  }
}

const applyFilters = () => {
  globalFilters.value = { ...tempFilters.value }
}
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">
        <Filter />
        <span class="hidden md:flex">Filter</span>
      </Button>
    </SheetTrigger>
    <SheetContent class="w-full">
      <SheetHeader>
        <SheetTitle>Select Stacks</SheetTitle>
      </SheetHeader>
      <div class=" grid space-y-2 px-4 overflow-y-auto ">
        <div v-for="item in stacks" class="flex gap-2 items-center">
          <Checkbox :model-value="tempFilters.stack.includes(item.slug)"
            @update:model-value="() => toggleStack(item.slug)" />
          <Label>
            {{ item.name }}
          </Label>
        </div>
      </div>
      <SheetFooter>
        <SheetClose as-child>
          <Button type="submit" @click="applyFilters">
            Save Filters
          </Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
