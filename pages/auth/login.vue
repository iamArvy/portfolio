<script setup lang="ts">
import TextLink from "@/components/TextLink.vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-vue-next";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { AuthForm } from "~/types";

useAppTitle("Login");

const schema = toTypedSchema(
  z.object({
    email: z.string().email(),
    password: z.string().min(8),
    remember: z.boolean().optional(),
  })
);

const { handleSubmit } = useForm({
  initialValues: {
    email: "",
    password: "",
    remember: false,
  },
  validationSchema: schema,
});

const { signIn, loading } = useAuth();
const submit = handleSubmit(async (values: AuthForm) => {
  await signIn(values);
});
definePageMeta({
  title: "Login",
  layout: "auth-card",
});
const { setProps } = useAuthBaseProps();
const props = {
  title: "Log in to your account",
  description: "Enter your email and password below to log in",
};
onMounted(() => setProps(props));
</script>

<template>
  <form class="flex flex-col gap-6" method="POST" @submit="submit">
    <div class="grid gap-6">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email address</FormLabel>
          <FormControl>
            <Input
              id="email"
              type="email"
              v-bind="componentField"
              required
              autofocus
              :tabindex="1"
              autocomplete="username"
              placeholder="john@example.com"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <div class="flex items-center justify-between">
            <FormLabel>Password</FormLabel>
            <TextLink href="auth-forgot-password" class="text-sm" :tabindex="2">
              Forgot password?
            </TextLink>
          </div>
          <FormControl>
            <Input
              id="password"
              type="password"
              v-bind="componentField"
              required
              :tabindex="3"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button
        type="submit"
        class="mt-4 w-full"
        :tabindex="4"
        :disabled="loading == true"
      >
        <LoaderCircle v-if="loading == true" class="h-4 w-4 animate-spin" />
        Log in
      </Button>
    </div>
    <div class="text-center text-sm text-muted-foreground">
      Don't have an account?
      <TextLink href="auth-register" :tabindex="5">Sign up</TextLink>
    </div>
  </form>
</template>
