"use client"

import { z } from "zod"
import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { ApiError, generateToast } from "@/lib/utils"
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
      const response = await signUpWithPassword({
        username: formData.username,
        email: formData.email,
        password: formData.password,
      })

      if ("error" in response) {
        generateToast({
          type: "warning",
          value: "An error occurred.",
          description: response.error,
        })
        setPending(false)
      } else {
        generateToast({
          type: "success",
          value: "Success!",
          description: response.success,
        })
      }
    } catch (error) {
      generateToast({
        type: "warning",
        value: "Something went wrong.",
        description: ApiError.error,
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
