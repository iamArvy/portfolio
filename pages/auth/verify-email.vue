<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { LoaderCircle } from "lucide-vue-next";
useAppTitle("Verify Email");
const { verifyEmail, loading } = useProfile();
const submit = async () => {
  await verifyEmail();
};

definePageMeta({
  title: "Verify Email",
  layout: "auth-card",
  middleware: ["auth"],
});

const { setProps } = useAuthBaseProps();
const props = {
  title: "Verify email",
  description:
    "Please verify your email address by clicking on the link we just emailed to you.",
};
onMounted(() => setProps(props));
const { signOut } = useAuth();
</script>

<template>
  <form class="space-y-6 text-center" @submit.prevent="submit">
    <Button :disabled="loading" variant="secondary">
      <LoaderCircle v-if="loading" class="h-4 w-4 animate-spin" />
      Resend verification email
    </Button>

    <Button class="mx-auto block text-sm" @click.prevent="signOut">
      Log out
    </Button>
  </form>
</template>
