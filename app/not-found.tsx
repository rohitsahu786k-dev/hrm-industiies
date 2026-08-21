import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-hrm-charcoal text-white p-4">
      <Container className="text-center max-w-xl">
        <span className="text-6xl font-extrabold text-hrm-orange font-mono block mb-4">404</span>
        <h1 className="text-3xl font-extrabold text-white mb-3">Page Not Found</h1>
        <p className="text-slate-300 text-sm mb-8">
          The architectural fabrication page or product specification you are looking for has moved or does not exist.
        </p>
        <Button href="/" variant="primary" size="lg" icon>
          Return to Homepage
        </Button>
      </Container>
    </div>
  );
}
