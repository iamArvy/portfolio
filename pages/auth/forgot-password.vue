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

useAppTitle("Forgot Password");

const schema = toTypedSchema(
  z.object({
    email: z.string().email(),
  })
);

const { handleSubmit } = useForm({
  initialValues: {
    email: "",
  },
  validationSchema: schema,
});

const { forgotPassword, loading } = useAuth();

const submit = handleSubmit(async (values) => {
  await forgotPassword(values);
});

const { setProps } = useAuthBaseProps();
const props = {
  title: "Forgot password",
  description: "Enter your email to receive a password reset link",
};
onMounted(() => setProps(props));
definePageMeta({
  title: "Forgot Password",
  layout: "auth-card",
});
</script>

<template>
  <div class="space-y-6">
    <form @submit.prevent="submit">
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email Address</FormLabel>
          <FormControl>
            <Input
              id="email"
              type="email"
              v-bind="componentField"
              required
              autocomplete="off"
              autofocus
              placeholder="john@example.com"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="my-6 flex items-center justify-start">
        <Button class="w-full" :disabled="loading">
          <LoaderCircle v-if="loading" class="h-4 w-4 animate-spin" />
          Email password reset link
        </Button>
      </div>
    </form>

    <div class="space-x-1 text-center text-sm text-muted-foreground">
      <span>Or, return to</span>
      <TextLink href="auth-login">log in</TextLink>
    </div>
  </div>
</template>
