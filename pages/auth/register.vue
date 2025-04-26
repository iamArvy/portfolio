<script setup lang="ts">
import TextLink from "@/components/TextLink.vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-vue-next";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import type { RegisterForm } from "~/types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

useAppTitle("Register");

const schema = toTypedSchema(
  z
    .object({
      name: z.string().min(3),
      email: z.string().email(),
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
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  },
  validationSchema: schema,
});

const { signUp, loading } = useAuth();
const submit = handleSubmit(async (values: RegisterForm) => {
  await signUp(values);
});
definePageMeta({
  title: "Register",
  layout: "auth-split",
});

const { setProps } = useAuthBaseProps();
const props = {
  title: "Create an account",
  description: "Enter your details below to create your account",
};
onMounted(() => setProps(props));
</script>

<template>
  <form class="flex flex-col gap-6" method="POST" @submit="submit">
    <div class="grid gap-6">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input
              id="name"
              type="text"
              v-bind="componentField"
              required
              autofocus
              :tabindex="1"
              autocomplete="name"
              placeholder="Full name"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email Address</FormLabel>
          <FormControl>
            <Input
              id="email"
              type="email"
              v-bind="componentField"
              required
              :tabindex="2"
              autocomplete="email"
              placeholder="email@example.com"
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
              v-bind="componentField"
              required
              :tabindex="3"
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
              v-bind="componentField"
              required
              :tabindex="4"
              autocomplete="new-password"
              placeholder="Confirm password"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button
        type="submit"
        class="mt-4 w-full"
        :tabindex="5"
        :disabled="loading == true"
      >
        <LoaderCircle v-if="loading == true" class="h-4 w-4 animate-spin" />
        Create Account
      </Button>
    </div>
    <div class="text-center text-sm text-muted-foreground">
      Already have an account?
      <TextLink
        :href="'auth-login'"
        class="underline underline-offset-4"
        :tabindex="6"
        >Log in</TextLink
      >
    </div>
  </form>
</template>
