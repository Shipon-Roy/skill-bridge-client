/* eslint-disable react/no-children-prop */
"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import * as z from "zod";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";

const formSchema = z.object({
  password: z.string().min(8, "Minimum length is 8"),
  email: z.email(),
});

export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Logging In");
      try {
        const { data, error } = await authClient.signIn.email(value);

        if (error) {
          toast.error(error.message, { id: toastId });
          return;
        }

        toast.success("User Logged in Successfully!", { id: toastId });
      } catch (err) {
        toast.error("Something went wrong please try again!", { id: toastId });
      }
    },
  });

  const googleLoginHandaler = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "http://localhost:3000",
    });
  };
  return (
    <Card {...props} className="bg-gray-900">
      <CardHeader>
        <CardTitle className="text-gray-100">Create an account</CardTitle>
        <CardDescription>
          Enter your information below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="signin-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel className="text-gray-100" htmlFor={field.name}>
                      Email
                    </FieldLabel>
                    <Input
                      id={field.name}
                      type="email"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Type your Email"
                      className="text-gray-100"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="password"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;
                return (
                  <Field>
                    <FieldLabel className="text-gray-100" htmlFor={field.name}>
                      Password
                    </FieldLabel>
                    <Input
                      id={field.name}
                      type="password"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      placeholder="Type your Password"
                      className="text-gray-100"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-5 justify-end">
        <Button form="signin-form" type="submit" className="w-full bg-gray-800">
          Login
        </Button>
        <Button
          onClick={() => googleLoginHandaler()}
          variant="outline"
          type="button"
        >
          Continue with Google
        </Button>
      </CardFooter>
    </Card>
  );
}
