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
import { Toaster, toast } from "sonner";
import classNames from "classnames";

type FormValues = {
  name: string;
  email: string;
  mobileNumber: number;
  headOffice: string;
  message: string;
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    },
  ) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      resetForm();
      toast.success("Form submitted successfully!");
      setShowConfetti(true);
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("There was an issue submitting the form.");
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  return (
    <>
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
            {[
              { label: "Name", id: "name", type: "text", name: "name" },
              { label: "Email", id: "email", type: "email", name: "email" },
            ].map(({ label, id, type, name }) => (
              <div key={id} className="w-full md:w-1/2 px-5 mb-4 space-y-2">
                <Label htmlFor={id}>{label}</Label>
                <Field
                  className={InputClassName}
                  type={type}
                  id={id}
                  name={name}
                  required
                />
                <ErrorMessage
                  name={name}
                  component="div"
                  className="text-rose-700"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap -mx-5">
            {[
              {
                label: "Mobile Number",
                id: "mobileNumber",
                type: "number",
                name: "mobileNumber",
              },
              {
                label: "Head Office",
                id: "headOffice",
                type: "text",
                name: "headOffice",
              },
            ].map(({ label, id, type, name }) => (
              <div key={id} className="w-full md:w-1/2 px-5 mb-4 space-y-2">
                <Label htmlFor={id}>{label}</Label>
                <Field
                  className={InputClassName}
                  type={type}
                  id={id}
                  name={name}
                  required
                />
                <ErrorMessage
                  name={name}
                  component="div"
                  className="text-rose-700"
                />
              </div>
            ))}
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
      <Toaster position="top-right" richColors />
    </>
  );
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <div className="flex gap-2 items-center">
          <Loader size="16" className="animate-spin" />
          <span>Submitting...</span>
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  );
}
