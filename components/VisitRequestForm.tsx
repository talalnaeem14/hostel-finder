"use client";

import { useState } from "react";
import FormField from "@/components/FormField";
import ConfirmationModal from "@/components/ConfirmationModal";
import Button from "@/components/Button";
import { hostels } from "@/data/hostels";

interface VisitRequestFormProps {
  initialHostelId?: string;
}

interface FormValues {
  name: string;
  phone: string;
  email: string;
  hostelId: string;
  date: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

function validate(v: FormValues): FormErrors {
  const errors: FormErrors = {};
  const today = new Date().toISOString().split("T")[0];

  if (v.name.trim().length < 3) errors.name = "Enter your full name (at least 3 characters).";
  if (!/^(\+92|0)3\d{9}$/.test(v.phone.replace(/[\s-]/g, "")))
    errors.phone = "Enter a valid Pakistani mobile number, e.g. 0300 1234567.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    errors.email = "Enter a valid email address.";
  if (!v.hostelId) errors.hostelId = "Please choose a hostel.";
  if (!v.date) errors.date = "Pick a preferred visit date.";
  else if (v.date < today) errors.date = "The date cannot be in the past.";
  if (v.message.length > 300) errors.message = "Message must be 300 characters or less.";

  return errors;
}

const inputClass =
  "w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600";

export default function VisitRequestForm({ initialHostelId = "" }: VisitRequestFormProps) {
  const validInitial = hostels.some((h) => h.id === initialHostelId)
    ? initialHostelId
    : "";

  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    hostelId: validInitial,
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // clear that field's error
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setValues({ name: "", phone: "", email: "", hostelId: "", date: "", message: "" });
  };

  const hostelName = hostels.find((h) => h.id === values.hostelId)?.name ?? "";

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        className="space-y-4 rounded-lg border bg-white p-6 shadow-sm"
      >
        <FormField id="name" label="Full name" error={errors.name}>
          <input id="name" name="name" value={values.name} onChange={handleChange} className={inputClass} />
        </FormField>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormField id="phone" label="Phone" error={errors.phone}>
            <input id="phone" name="phone" type="tel" placeholder="0300 1234567" value={values.phone} onChange={handleChange} className={inputClass} />
          </FormField>
          <FormField id="email" label="Email" error={errors.email}>
            <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={inputClass} />
          </FormField>
        </div>

        <FormField id="hostelId" label="Hostel" error={errors.hostelId}>
          <select id="hostelId" name="hostelId" value={values.hostelId} onChange={handleChange} className={inputClass}>
            <option value="">Select a hostel</option>
            {hostels.map((h) => (
              <option key={h.id} value={h.id}>
                {h.name} ({h.area}, {h.city})
              </option>
            ))}
          </select>
        </FormField>

        <FormField id="date" label="Preferred date" error={errors.date}>
          <input id="date" name="date" type="date" value={values.date} onChange={handleChange} className={inputClass} />
        </FormField>

        <FormField id="message" label="Message (optional)" error={errors.message}>
          <textarea id="message" name="message" rows={4} value={values.message} onChange={handleChange} className={inputClass} />
          <p className="mt-1 text-xs text-slate-500">{values.message.length}/300</p>
        </FormField>

        <Button type="submit" className="w-full">Send visit request</Button>
      </form>

      <ConfirmationModal
        open={submitted}
        name={values.name}
        hostelName={hostelName}
        date={values.date}
        onClose={handleClose}
      />
    </>
  );
}