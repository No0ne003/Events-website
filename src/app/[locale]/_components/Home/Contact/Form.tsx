"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea, TextareaClassName } from "@/components/ui/textarea";
import { validationSchema } from "@/lib/validation";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { InputClassName } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

type FormValues = {
  name: string;
  email: string;
  mobileNumber: number;
  headOffice: string;
  message: string;
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        mobileNumber: 0,
        headOffice: "",
        message: "",
      }}
      validationSchema={toFormikValidationSchema(validationSchema)}
      onSubmit={handleSubmit}
    >
      <Form className="container max-w-3xl py-8 space-y-6">
        <div className="flex flex-wrap -mx-5">
          <div className="w-full md:w-1/2 px-5 mb-4 space-y-2">
            <Label htmlFor="name">Name</Label>
            <Field
              className={InputClassName}
              type="text"
              id="name"
              name="name"
              required
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-rose-700"
            />
          </div>
          <div className="w-full md:w-1/2 px-5 mb-4 space-y-2">
            <Label htmlFor="email">Email</Label>
            <Field
              className={InputClassName}
              type="email"
              id="email"
              name="email"
              required
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-rose-700"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-5">
          <div className="w-full md:w-1/2 px-5 mb-4 space-y-2">
            <Label htmlFor="mobileNumber">Mobile Number</Label>
            <Field
              className={InputClassName}
              type="number"
              id="mobileNumber"
              name="mobileNumber"
              required
            />
            <ErrorMessage
              name="mobileNumber"
              component="div"
              className="text-rose-700"
            />
          </div>
          <div className="w-full md:w-1/2 px-5 mb-4 space-y-2">
            <Label htmlFor="headOffice">Head Office</Label>
            <Field
              className={InputClassName}
              type="text"
              id="headOffice"
              name="headOffice"
              required
            />
            <ErrorMessage
              name="headOffice"
              component="div"
              className="text-rose-700"
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Field
            className={TextareaClassName}
            id="message"
            name="message"
            as="textarea"
            required
          />
          <ErrorMessage
            name="message"
            component="div"
            className="text-rose-700"
          />
        </div>
        <SubmitButton pending={isLoading} />
      </Form>
    </Formik>
  );
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <div className="flex gap-2 items-center">
          <Loader size="16" className="animate-spin" />
          <span>Saving...</span>
        </div>
      ) : (
        "Save"
      )}
    </Button>
  );
}
