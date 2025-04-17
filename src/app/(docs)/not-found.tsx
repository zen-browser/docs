import { buttonVariants } from "fumadocs-ui/components/api";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center w-full h-screen">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl transition-transform">
            404
          </h1>
          <p className="text-gray-500">
            Oops! You&apos;ve wandered off the Zen path. Let&apos;s guide you
            back to tranquility.
          </p>
        </div>
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
