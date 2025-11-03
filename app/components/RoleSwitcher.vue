<script lang="ts" setup>
const { roles } = useContent()
// const route = useRoute()
// const query = route.query.role as string
const role = useState<string>('role', () => '')
const selectedRole = computed(() =>
  roles ? roles.find(item => item.value === role.value) : undefined
)

// const position = ref("bottom")
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline">
        {{ selectedRole ? selectedRole.title : 'All' }}
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56">
      <DropdownMenuLabel>Job Roles</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup v-model="role">
        <DropdownMenuRadioItem value="all">
            All
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem v-for="item in roles" :key="item.value" :value="item.value">
            {{ item.title }}
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
</template>