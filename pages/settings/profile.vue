<script setup lang="ts">
import DeleteUser from "@/components/DeleteUser.vue";
import HeadingSmall from "@/components/HeadingSmall.vue";
// import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SettingsLayout from "~/layouts/settings.vue";
import type { User, ProfileEditForm } from "@/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { Button } from "~/components/ui/button";
useAppTitle("Profile Settings");

const breadcrumbs = useBreadcrumbs();
breadcrumbs.value = [
  {
    title: "Profile settings",
    href: "settings-profile",
  },
];
const user = useAuth().user.value as User;

const schema = toTypedSchema(
  z.object({
    name: z.string().min(2),
    email: z.string().email(),
  })
);

const { handleSubmit } = useForm({
  initialValues: {
    name: user?.name,
    email: user?.email,
  },
  validationSchema: schema,
});

const { editProfile, loading, verifyEmail } = useProfile();
const submit = handleSubmit(async (values: ProfileEditForm) => {
  await editProfile(values);
});

definePageMeta({
  title: "Update Password",
  middleware: ["auth"],
});
</script>

<template>
  <SettingsLayout>
    <div class="flex flex-col space-y-6">
      <HeadingSmall
        title="Profile information"
        description="Update your name and email address"
      />

      <form class="space-y-6" method="post" @submit.prevent="submit">
        <FormField v-slot="{ componentField }" name="name">
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                id="name"
                type="text"
                v-bind="componentField"
                class="mt-1 block w-full"
                required
                autocomplete="name"
                placeholder="Full name"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <FormField v-slot="{ componentField }" name="email">
          <FormItem>
            <FormLabel>Email address</FormLabel>
            <FormControl>
              <Input
                id="email"
                type="email"
                v-bind="componentField"
                class="mt-1 block w-full"
                required
                autocomplete="username"
                placeholder="Email address"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        </FormField>

        <div v-if="!user?.email_verified_at">
          <p class="-mt-4 text-sm text-muted-foreground">
            Your email address is unverified.
            <Button
              class="text-foreground underline decoration-neutral-300 underline-offset-4 transition-colors duration-300 ease-out hover:decoration-current! dark:decoration-neutral-500"
              variant="link"
              :disabled="loading"
              @click.prevent="verifyEmail"
            >
              Click here to resend the verification email.
            </Button>
          </p>
        </div>

        <div class="flex items-center gap-4">
          <Button :disabled="loading">Save</Button>
        </div>
      </form>
    </div>

    <DeleteUser />
  </SettingsLayout>
</template>
