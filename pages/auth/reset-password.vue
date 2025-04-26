<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-vue-next";
import type { ResetPasswordForm } from "@/types";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

useAppTitle("Reset Password");
// interface Props {
//   token: string;
//   email: string;
// }

// const props = defineProps<Props>();

const props = {
  email: "john@example.com",
  token: "123456",
};
const schema = toTypedSchema(
  z.object({
    token: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
    password_confirmation: z.string().min(8),
  })
);

const { handleSubmit } = useForm({
  initialValues: {
    token: props.token,
    email: props.email,
    password: "",
    password_confirmation: "",
  },
  validationSchema: schema,
});

const { resetPassword, loading } = useAuth();
const submit = handleSubmit(async (values: ResetPasswordForm) => {
  resetPassword(values);
});

definePageMeta({
  title: "Reset password",
  layout: "auth-card",
});

const { setProps } = useAuthBaseProps();
const authProps = {
  title: "Reset password",
  description: "Please enter your new password below",
};
onMounted(() => setProps(authProps));
</script>

<template>
  <form @submit.prevent="submit">
    <div class="grid gap-6">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email Address</FormLabel>
          <FormControl>
            <Input
              id="email"
              type="email"
              class="mt-1 block w-full"
              v-bind="componentField"
              required
              readonly
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              id="password"
              type="password"
              class="mt-1 block w-full"
              v-bind="componentField"
              required
              autofocus
              autocomplete="new-password"
              placeholder="Password"
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
              class="mt-1 block w-full"
              v-bind="componentField"
              required
              autocomplete="new-password"
              placeholder="Confirm password"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit" class="mt-4 w-full" :disabled="loading">
        <LoaderCircle v-if="loading" class="h-4 w-4 animate-spin" />
        Reset password
      </Button>
    </div>
  </form>
</template>
