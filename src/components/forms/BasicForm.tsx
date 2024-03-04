"use client"

import { Form } from "@/components/shadcn/form"
import { FormSubmitButton } from "@/components/ui/FormSubmitButton"
import { FormInput } from "@/components/ui/FormInput"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { cn, generateToast } from "@/lib/utils"
import { z } from "zod"
import { FormTextArea } from "@/components/ui/FormTextArea"
import { FormSelect } from "@/components/ui/FormSelect"
import { FormSwitch } from "@/components/ui/FormSwitch"

const BasicFormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  text: z.string().min(2, {
    message: "Text must be at least 2 characters.",
  }),
})

type BasicFormSchemaType = z.infer<typeof BasicFormSchema>

type BasicFormProps = {
  className?: string
}

export function BasicForm({ className }: BasicFormProps) {
  const [pending, isPending] = useState(false)

  const form = useForm<BasicFormSchemaType>({
    resolver: zodResolver(BasicFormSchema),
    defaultValues: {
      username: "",
      text: "",
    },
  })

  function onSubmit(values: BasicFormSchemaType) {
    generateToast({
      type: "success",
      value: `Username: ${values.username}`,
      description: `Text: ${values.text}`,
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col max-w-[400px] gap-4", className)}
      >
        <FormInput
          value="username"
          placeholder="Enter username"
          label="Username"
        />
        {/* 
        <FormSwitch
          value="text"
          label="Marketing emails"
          description="Receive emails about new products, features, and more."
        /> */}
        {/* <FormSelect
          value="text"
          placeholder={"trash"}
          items={[
            { value: "1", label: "1" },
            { value: "2", label: "2" },
          ]}
          description="This is a description"
          label="Label"
        /> */}
        {/* <FormTextArea value="text" placeholder={"trash"} /> */}

        <FormSubmitButton pending={pending} className="max-w-fit self-end">
          Create account
        </FormSubmitButton>
      </form>
    </Form>
  )
}
