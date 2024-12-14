"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { Toaster, toast } from "sonner";
import { useLocale, useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

function getValidationSchema(t: any) {
	return z.object({
		name: z.string().min(2, t("nameRequired")),
		email: z.string().email(t("emailInvalid")),
		mobileNumber: z.string().regex(/^\d+$/, t("mobileNumberInvalid")),
		headOffice: z.string().optional(),
		message: z.string().min(10, t("messageMinLength")),
	});
}

type FormValues = z.infer<ReturnType<typeof getValidationSchema>>;

export default function ContactForm() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const t = useTranslations("HomePage.contact.form");
	const locale = useLocale();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormValues>({
		resolver: zodResolver(getValidationSchema(t)),
	});

	const onSubmit: SubmitHandler<FormValues> = async (values) => {
		try {
			setIsLoading(true);
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});

			if (!response.ok) {
				const errorResponse = await response.json();
				throw new Error(errorResponse.error || "Failed to send email");
			}

			reset();
			toast.success(t("success"));
		} catch (error: any) {
			console.error(error);
			if (error?.response?.data?.errors) {
				error?.response?.data?.errors?.forEach((errorMessage: string) => {
					toast.error(errorMessage);
				});
			} else {
				toast.error(error.message || t("error"));
			}
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="container max-w-3xl p-8 space-y-6"
			>
				<div
					className={cn(
						"flex flex-wrap -mx-5",
						locale === "ar" && "flex-row-reverse",
					)}
				>
					<FormField
						id="name"
						label={t("name")}
						register={register}
						errors={errors}
						required
					/>
					<FormField
						id="email"
						label={t("email")}
						register={register}
						errors={errors}
						required
						type="email"
					/>
				</div>
				<div
					className={cn(
						"flex flex-wrap -mx-5",
						locale === "ar" && "flex-row-reverse",
					)}
				>
					<FormField
						id="mobileNumber"
						label={t("mobileNumber")}
						register={register}
						errors={errors}
						type="number"
						required
					/>
					<FormField
						id="headOffice"
						label={t("headOffice")}
						register={register}
						errors={errors}
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="message">{t("message")}</Label>
					<Textarea
						id="message"
						{...register("message")}
						className="resize-none"
						required
					/>
					{errors.message && <ErrorMessage message={errors.message.message} />}
				</div>
				<SubmitButton pending={isLoading} t={t} />
			</form>
			<Toaster position="top-right" richColors />
		</>
	);
}

type FormFieldProps = {
	id: keyof FormValues;
	label: string;
	register: any;
	errors: Partial<Record<keyof FormValues, { message?: string }>>;
	type?: string;
	required?: boolean;
};

function FormField({
	id,
	label,
	register,
	errors,
	type = "text",
	required = false,
}: FormFieldProps) {
	return (
		<div className="w-full md:w-1/2 px-5 mb-4 space-y-2">
			<Label htmlFor={id}>{label}</Label>
			<Input id={id} type={type} {...register(id)} required={required} />
			{errors[id] && <ErrorMessage message={errors[id]?.message ?? ""} />}
		</div>
	);
}

function ErrorMessage({ message }: { message: string | undefined }) {
	return <p className="text-rose-700 text-sm">{message}</p>;
}

function SubmitButton({ pending, t }: { pending: boolean; t: any }) {
	return (
		<Button type="submit" disabled={pending}>
			{pending ? (
				<div className="flex gap-2 items-center">
					<Loader size="16" className="animate-spin" />
					<span>{t("submitting")}</span>
				</div>
			) : (
				t("submit")
			)}
		</Button>
	);
}
