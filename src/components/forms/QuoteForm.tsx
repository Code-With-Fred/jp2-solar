"use client";

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, Check, ChevronDown, Loader2 } from "lucide-react";
import { serviceOptions } from "@/content/company";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type FieldName =
  | "fullName"
  | "company"
  | "phone"
  | "email"
  | "service"
  | "location"
  | "message";

type FormValues = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const initialValues: FormValues = {
  fullName: "",
  company: "",
  phone: "",
  email: "",
  service: "",
  location: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateField(name: FieldName, value: string): string | undefined {
  const trimmed = value.trim();

  switch (name) {
    case "fullName":
      if (trimmed.length < 2) return "Please enter your full name.";
      return undefined;
    case "phone": {
      if (!trimmed) return "Please enter a phone number we can reach you on.";
      if (trimmed.replace(/\D/g, "").length < 7) return "Please enter a complete phone number.";
      return undefined;
    }
    case "email":
      if (!trimmed) return "Please enter your email address.";
      if (!emailPattern.test(trimmed)) return "Please check the email address and try again.";
      return undefined;
    case "service":
      if (!trimmed) return "Please select the service you need.";
      return undefined;
    case "message":
      if (!trimmed) return "Please tell us briefly what you need.";
      if (trimmed.length < 10) return "A little more detail helps us respond accurately.";
      return undefined;
    default:
      return undefined;
  }
}

function validateAll(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  (Object.keys(values) as FieldName[]).forEach((name) => {
    const error = validateField(name, values[name]);
    if (error) errors[name] = error;
  });
  return errors;
}

const fieldBase =
  "w-full rounded-xs border bg-white px-4 text-[0.9375rem] text-graphite-900 " +
  "outline-none transition-[border-color,box-shadow] duration-200 " +
  "placeholder:text-graphite-400";

function fieldTone(invalid: boolean) {
  return invalid
    ? "border-[#b4432f] focus:border-[#b4432f] focus:shadow-[0_0_0_3px_rgba(180,67,47,0.14)]"
    : "border-graphite-900/20 hover:border-graphite-900/40 focus:border-solar-600 focus:shadow-[0_0_0_3px_rgba(226,149,47,0.18)]";
}

type FieldShellProps = {
  name: FieldName;
  label: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
};

function FieldShell({ name, label, optional, error, children, className }: FieldShellProps) {
  return (
    <div className={className}>
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <label htmlFor={name} className="text-sm font-medium text-graphite-900">
          {label}
        </label>
        {optional ? <span className="text-xs text-graphite-400">Optional</span> : null}
      </div>

      {children}

      <AnimatePresence initial={false}>
        {error ? (
          <motion.p
            id={`${name}-error`}
            role="alert"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="flex items-start gap-1.5 overflow-hidden text-[0.8125rem] text-[#b4432f]"
          >
            <AlertCircle className="mt-2 size-3.5 shrink-0" aria-hidden="true" />
            <span className="pt-1.5">{error}</span>
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

const allTouched: Record<FieldName, boolean> = {
  fullName: true,
  company: true,
  phone: true,
  email: true,
  service: true,
  location: true,
  message: true,
};

export function QuoteForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const name = event.target.name as FieldName;
    const { value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));

    // Re-validate while typing only once a field has been visited, so an
    // error never appears mid keystroke on a field being filled for the
    // first time.
    if (touched[name]) {
      setErrors((current) => ({ ...current, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const name = event.target.name as FieldName;
    setTouched((current) => ({ ...current, [name]: true }));
    setErrors((current) => ({ ...current, [name]: validateField(name, event.target.value) }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateAll(values);
    setErrors(nextErrors);
    setTouched(allTouched);

    const firstError = (Object.keys(nextErrors) as FieldName[])[0];
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }

    setStatus("submitting");
    // No backend is wired for this concept. This stands in for the network
    // request so the submitting and success states can be reviewed.
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setStatus("idle");
  };

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="status"
          aria-live="polite"
          className="flex min-h-[26rem] flex-col items-start justify-center"
        >
          <motion.span
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex size-14 items-center justify-center rounded-full bg-solar-500 text-ink-950"
          >
            <Check className="size-6" strokeWidth={2.4} aria-hidden="true" />
          </motion.span>

          <h3 className="display-md mt-7 text-graphite-900">Enquiry captured</h3>
          <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-graphite-500">
            Thank you. In the live build this enquiry reaches the {siteConfig.name} inbox and a
            member of the team responds directly.
          </p>
          <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-graphite-400">
            This concept runs without a backend, so nothing has been transmitted. Connecting an
            email service or a CRM endpoint is a short task at build time.
          </p>

          <button
            type="button"
            onClick={reset}
            className="mt-8 rounded-xs text-[0.9375rem] font-medium text-graphite-900 underline decoration-solar-600 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-solar-600"
          >
            Send another enquiry
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          noValidate
          onSubmit={handleSubmit}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2"
        >
          <FieldShell name="fullName" label="Full Name" error={errors.fullName}>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.fullName ? "true" : undefined}
              aria-describedby={errors.fullName ? "fullName-error" : undefined}
              placeholder="Your name"
              className={cn(fieldBase, fieldTone(Boolean(errors.fullName)), "h-12")}
            />
          </FieldShell>

          <FieldShell name="company" label="Company" optional>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Company or organisation"
              className={cn(fieldBase, fieldTone(false), "h-12")}
            />
          </FieldShell>

          <FieldShell name="phone" label="Phone Number" error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.phone ? "true" : undefined}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              placeholder="Best number to reach you"
              className={cn(fieldBase, fieldTone(Boolean(errors.phone)), "h-12")}
            />
          </FieldShell>

          <FieldShell name="email" label="Email Address" error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              required
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.email ? "true" : undefined}
              aria-describedby={errors.email ? "email-error" : undefined}
              placeholder="you@company.com"
              className={cn(fieldBase, fieldTone(Boolean(errors.email)), "h-12")}
            />
          </FieldShell>

          <FieldShell name="service" label="Service Required" error={errors.service}>
            <div className="relative">
              <select
                id="service"
                name="service"
                required
                value={values.service}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={errors.service ? "true" : undefined}
                aria-describedby={errors.service ? "service-error" : undefined}
                className={cn(
                  fieldBase,
                  fieldTone(Boolean(errors.service)),
                  "h-12 cursor-pointer appearance-none pr-11",
                  values.service ? "text-graphite-900" : "text-graphite-400",
                )}
              >
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <ChevronDown
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-graphite-500"
              />
            </div>
          </FieldShell>

          <FieldShell name="location" label="Project Location" optional>
            <input
              id="location"
              name="location"
              type="text"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="City or area"
              className={cn(fieldBase, fieldTone(false), "h-12")}
            />
          </FieldShell>

          <FieldShell
            name="message"
            label="Message"
            error={errors.message}
            className="sm:col-span-2"
          >
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={errors.message ? "true" : undefined}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Tell us about the property, the loads that matter and what you are trying to solve."
              className={cn(fieldBase, fieldTone(Boolean(errors.message)), "resize-y py-3.5")}
            />
          </FieldShell>

          <div className="mt-1 flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="submit"
              variant="dark"
              size="lg"
              disabled={status === "submitting"}
              withArrow={status !== "submitting"}
              className="w-full sm:w-auto"
            >
              {status === "submitting" ? (
                <span className="inline-flex items-center gap-2.5">
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                  Sending
                </span>
              ) : (
                siteConfig.cta.primary.label
              )}
            </Button>

            <p className="text-xs leading-relaxed text-graphite-400 sm:max-w-[15rem] sm:text-right">
              We use your details only to respond to this enquiry.
            </p>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
