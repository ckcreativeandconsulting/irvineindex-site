"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { categories } from "@/lib/directory";

type FormState = "idle" | "submitting" | "success" | "error";

export function SubmitBusinessForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    const response = await fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      form.reset();
      setState("success");
      return;
    }

    setState("error");
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded border border-ink/10 bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-ink">
          Business name
          <input required name="name" className="h-11 rounded border border-ink/15 px-3" placeholder="Irvine business name" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Category
          <select required name="category" className="h-11 rounded border border-ink/15 px-3">
            <option value="">Choose a category</option>
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Phone
          <input required name="phone" className="h-11 rounded border border-ink/15 px-3" placeholder="(949) 555-0128" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Website
          <input required name="website" type="url" className="h-11 rounded border border-ink/15 px-3" placeholder="https://example.com" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-ink">
          Neighborhood
          <input required name="neighborhood" className="h-11 rounded border border-ink/15 px-3" placeholder="Woodbridge" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-ink">
        Short pitch
        <textarea required name="pitch" className="min-h-28 rounded border border-ink/15 px-3 py-3" maxLength={320} placeholder="What should Irvine residents know?" />
      </label>
      <button
        className="inline-flex h-11 w-full items-center justify-center gap-2 rounded bg-coast px-4 font-semibold text-white hover:bg-ink disabled:cursor-not-allowed disabled:bg-ink/45 sm:w-fit"
        type="submit"
        disabled={state === "submitting"}
      >
        <Send size={17} aria-hidden="true" />
        {state === "submitting" ? "Saving..." : "Submit business"}
      </button>
      {state === "success" ? <p className="text-sm font-medium text-sage">Saved locally to data/submissions.json.</p> : null}
      {state === "error" ? <p className="text-sm font-medium text-clay">Something went wrong. Please try again locally.</p> : null}
    </form>
  );
}

