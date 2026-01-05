"use client";
import Link from "next/link";
import Button from "@/components/ui/Button/Button";

export default function Home() {
  return (
    <div className="px-8 py-16 flex flex-col gap-8 items-center justify-center min-h-screen text-center">
      <section>
        <h1 className="text-6xl mb-4">Shinobi</h1>
        <p className="text-xl leading-relaxed max-w-2xl mb-12">
          Welcome to Shinobi. The blog for web developers and ninjas.
        </p>
      </section>

      <div className="flex gap-6 flex-wrap justify-center">
        <Link href="/blog">
          <Button variant="primary" className="text-lg px-8 py-4">
            Visit Blog
          </Button>
        </Link>

        <Link href="/preview">
          <Button variant="secondary" className="text-lg px-8 py-4">
            Preview Components
          </Button>
        </Link>
      </div>
    </div>
  );
}
