<script setup lang="ts">
import UserInfo from "@/components/UserInfo.vue";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import type { User } from "~/types";
import { LogOut, Settings } from "lucide-vue-next";
import { Button } from "./ui/button";

interface Props {
  user: User;
}

const { signOut } = useAuth();
defineProps<Props>();
</script>

<template>
  <DropdownMenuLabel class="p-0 font-normal">
    <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
      <UserInfo :user="user" :show-email="true" />
    </div>
  </DropdownMenuLabel>
  <DropdownMenuSeparator />
  <DropdownMenuGroup>
    <DropdownMenuItem :as-child="true">
      <NuxtLink class="block w-full" to="settings/profile" as="button">
        <Settings class="mr-2 h-4 w-4" />
        Settings
      </NuxtLink>
    </DropdownMenuItem>
  </DropdownMenuGroup>
  <DropdownMenuSeparator />
  <DropdownMenuItem :as-child="true">
    <Button variant="ghost" class="w-full" @click="signOut">
      <LogOut class="mr-2 h-4 w-4" />
      Log out
    </Button>
  </DropdownMenuItem>
</template>
