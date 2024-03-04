"use client"

import { z } from "zod"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { generateToast } from "@/lib/utils"
import { Form } from "@/components/shadcn/form"
import { signUpWithPasswordSchema } from "@/validations/auth"
import { signUpWithPassword } from "@/db/actions/user"
import { FormTextInput } from "@/components/ui/FormTextInput"
import { FormSubmitButton } from "@/components/ui/FormSubmitButton"
import { FormPasswordInput } from "@/components/ui/FormPasswordInput"

type SignUpWithPasswordFormProps = {}

export function SignUpWithPasswordForm({}: SignUpWithPasswordFormProps) {
  const router = useRouter()
  const [pending, setPending] = useState(false)

  const form = useForm<z.infer<typeof signUpWithPasswordSchema>>({
    resolver: zodResolver(signUpWithPasswordSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  async function onSubmit(formData: z.infer<typeof signUpWithPasswordSchema>) {
    setPending(true)

    try {
      const message = await signUpWithPassword({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })

      switch (message) {
        case "success":
          generateToast({
            type: "success",
            value: "Success!",
            description: "Your account was successfully created.",
          })
          //   router.push("/login")
          break

        case "user-duplicate":
          generateToast({
            type: "warning",
            value: "This username already exists.",
            description: "Please try a different username.",
          })
          setPending(false)
          break

        case "email-duplicate":
          generateToast({
            type: "warning",
            value: "User with this email address already exists.",
            description: "If this is you, please sign in instead.",
          })
          setPending(false)
          break

        case "invalid-input":
          generateToast({
            type: "warning",
            value: "Invalid inputs.",
            description: "Please try again with different inputs.",
          })
          setPending(false)
          break

        default:
          generateToast({
            type: "error",
            value: "Something went wrong!",
            description: "Please try again.",
          })
          setPending(false)
      }
    } catch (error) {
      generateToast({
        type: "error",
        value: "Something went wrong!",
        description: "Please try again.",
      })
      setPending(false)
    } finally {
      setPending(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormTextInput
          value="username"
          placeholder="Enter username"
          label="Username"
        />

        <FormTextInput value="email" placeholder="Enter email" label="Email" />

        <FormPasswordInput value="password" label="Password" />

        <FormSubmitButton pending={pending} className="max-w-fit self-end">
          Create account
        </FormSubmitButton>
      </form>
    </Form>
  )
}
