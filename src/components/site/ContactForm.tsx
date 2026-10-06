import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional(),
  subject: z.string().trim().min(3, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Tell us a little about your project (10+ characters)").max(2000),
});

type Field = keyof z.infer<typeof schema>;

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const next: Partial<Record<Field, string>> = {};
      for (const issue of result.error.issues) next[issue.path[0] as Field] ??= issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    const v = result.data;
    const body = `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone || "-"}\n\n${v.message}`;
    window.location.href = `mailto:info@uipafrica.com?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div role="status" className="border border-border bg-card p-8">
        <p className="eyebrow">Enquiry ready</p>
        <p className="mt-4 text-xl leading-snug">Your email app has opened with your enquiry. Press send there and our team will reply within one working day.</p>
        <button type="button" onClick={() => setSent(false)} className="link-underline mt-6 text-sm font-semibold text-accent">Write another enquiry</button>
      </div>
    );
  }

  const field = (name: Field, label: string, el: React.ReactNode, wide = false) => (
    <div className={`grid gap-2 ${wide ? "sm:col-span-2" : ""}`}>
      <label htmlFor={`cf-${name}`} className="text-sm font-medium">{label}</label>
      {el}
      {errors[name] ? <p id={`cf-${name}-err`} className="text-xs text-destructive">{errors[name]}</p> : null}
    </div>
  );
  const common = (name: Field) => ({
    id: `cf-${name}`,
    name,
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `cf-${name}-err` : undefined,
    className: "h-12 rounded-none bg-card",
  });

  return (
    <form noValidate onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
      {field("name", "Your name *", <Input {...common("name")} autoComplete="name" />)}
      {field("email", "Your email *", <Input {...common("email")} type="email" autoComplete="email" />)}
      {!compact && field("phone", "Phone", <Input {...common("phone")} type="tel" autoComplete="tel" />)}
      {field("subject", "Subject *", <Input {...common("subject")} />, compact)}
      {field("message", "Your project *", <Textarea {...common("message")} className="min-h-36 rounded-none bg-card" />, true)}
      <Button type="submit" className="h-12 rounded-none px-8 text-xs font-semibold uppercase tracking-[0.16em] sm:col-start-2 sm:justify-self-end">
        Send enquiry
      </Button>
    </form>
  );
}
