import type { Metadata } from "next";
import { SubmitBusinessForm } from "@/components/SubmitBusinessForm";

export const metadata: Metadata = {
  title: "Submit an Irvine Business",
  description: "Submit an Irvine business listing to Irvine Index."
};

export default function SubmitPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase text-clay">Business submission</p>
      <h1 className="mt-2 text-4xl font-semibold text-ink">Submit an Irvine business</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/72">
        Share business details for review. No payments or accounts are required.
      </p>
      <div className="mt-8">
        <SubmitBusinessForm />
      </div>
    </section>
  );
}

