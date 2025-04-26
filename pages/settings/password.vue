<script setup lang="ts">
import SettingsLayout from "~/layouts/settings.vue";
import HeadingSmall from "@/components/HeadingSmall.vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import type { UpdatePasswordForm } from "~/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
useAppTitle("Password Settings");

const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [
  {
    title: "Password settings",
    href: "settings-password",
  },
];

const schema = toTypedSchema(
  z
    .object({
      current_password: z.string().min(8),
      password: z.string().min(8),
      password_confirmation: z.string().min(8),
    })
    .refine((data) => data.password === data.password_confirmation, {
      message: "Passwords don't match",
      path: ["password_confirmation"],
    })
);

const { handleSubmit } = useForm({
  initialValues: {
    current_password: "",
    password: "",
    password_confirmation: "",
  },
  validationSchema: schema,
});

const { updatePassword, loading } = useProfile();
const submit = handleSubmit(async (values: UpdatePasswordForm) => {
  await updatePassword(values);
});

definePageMeta({
  title: "Update Password",
  middleware: ["auth"],
});
</script>

<template>
  <SettingsLayout>
    <div class="space-y-6">
      <HeadingSmall
        title="Update password"
        description="Ensure your account is using a long, random password to stay secure"
      />

      <form class="space-y-6" method="post" @submit.prevent="submit">
        <FormField v-slot="{ componentField }" name="current_password">
          <FormItem>
            <FormLabel>Current Password</FormLabel>
            <FormControl>
              <Input
                id="current_password"
                type="password"
                v-bind="componentField"
                required
                class="mt-1 block w-full"
                autocomplete="current-password"
                placeholder="Current Password"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="password">
          <FormItem>
            <FormLabel>New Password</FormLabel>
            <FormControl>
              <Input
                id="password"
                type="password"
                v-bind="componentField"
                required
                class="mt-1 block w-full"
                autocomplete="new-password"
                placeholder="New Password"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="password_confirmation">
          <FormItem>
            <FormLabel>Confirm Password</FormLabel>
            <FormControl>
              <Input
                id="password_confirmation"
                type="password"
                v-bind="componentField"
                required
                class="mt-1 block w-full"
                autocomplete="new-password"
                placeholder="Confirm Password"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>
        <div class="flex items-center gap-4">
          <Button :disabled="loading">Save password</Button>
        </div>
      </form>
    </div>
  </SettingsLayout>
</template>
