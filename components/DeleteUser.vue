<script setup lang="ts">
// import { useForm } from '@';
// import { ref } from "vue";

// Components
import HeadingSmall from "@/components/HeadingSmall.vue";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
// const passwordInput = ref<HTMLInputElement | null>(null);

const schema = toTypedSchema(
  z.object({
    password: z.string().min(8).max(32),
  })
);

const { handleSubmit, resetForm } = useForm({
  initialValues: {
    password: "",
  },
  validationSchema: schema,
});
const { deleteAccount, loading } = useProfile();
const deleteUser = handleSubmit(async (values: { password: string }) => {
  await deleteAccount(values);
  closeModal();
});
const closeModal = () => {
  resetForm();
};
</script>

<template>
  <div class="space-y-6">
    <HeadingSmall
      title="Delete account"
      description="Delete your account and all of its resources"
    />
    <div
      class="space-y-4 rounded-lg border border-red-100 bg-red-50 p-4 dark:border-red-200/10 dark:bg-red-700/10"
    >
      <div class="relative space-y-0.5 text-red-600 dark:text-red-100">
        <p class="font-medium">Warning</p>
        <p class="text-sm">
          Please proceed with caution, this cannot be undone.
        </p>
      </div>
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="destructive">Delete account</Button>
        </DialogTrigger>
        <DialogContent>
          <form class="space-y-6" @submit="deleteUser">
            <DialogHeader class="space-y-3">
              <DialogTitle
                >Are you sure you want to delete your account?</DialogTitle
              >
              <DialogDescription>
                Once your account is deleted, all of its resources and data will
                also be permanently deleted. Please enter your password to
                confirm you would like to permanently delete your account.
              </DialogDescription>
            </DialogHeader>

            <!-- <div class="grid gap-2"> -->
            <!-- <Label for="password" class="sr-only">Password</Label> -->
            <!-- <Input
                id="password"
                ref="passwordInput"
                v-model="form.password"
                type="password"
                name="password"
                placeholder="Password"
              /> -->
            <!-- <InputError :message="form.errors.password" /> -->
            <!-- </div> -->
            <FormField v-slot="{ componentField }" name="password">
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    v-bind="componentField"
                    required
                    autocomplete="username"
                    placeholder="Password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <DialogFooter class="gap-2">
              <DialogClose as-child>
                <Button variant="secondary" @click="closeModal">
                  Cancel
                </Button>
              </DialogClose>

              <Button variant="destructive" :disabled="loading">
                <button type="submit">Delete account</button>
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</template>
