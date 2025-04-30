import { buttonVariants } from "fumadocs-ui/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex items-center w-full h-screen">
      <Image
        src="/icon.svg"
        alt="404"
        width={40}
        height={40}
        className="mx-auto hidden md:block absolute top-4 left-4"
      />
      <div className="w-full space-y-6 text-center">
        <div className="space-y-2">
          <h1 className="text-[#F76F53] text-8xl font-bold tracking-tighter transition-transform">
            404
          </h1>
          <h2 className="text-4xl font-light tracking-tighter transition-transform">
            Page not found
          </h2>
        </div>
        <hr />
        <p className="text-[#CBC9BF]">
          Oops! You&apos;ve wandered off the Zen path. Let&apos;s guide you back
          to tranquility.
        </p>
        <Link
          className={buttonVariants({
            color: "outline",
          })}
          href="/"
        >
          Return to Docs
        </Link>
      </div>
    </div>
  );
}
