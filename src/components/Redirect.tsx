import Link from "next/link";

interface RedirectProps {
  to: string;
  message?: string;
}

export default function Redirect({ to, message }: RedirectProps) {
  return (
    <>
      <meta httpEquiv="refresh" content={`2;url=${to}`} />
      <link rel="canonical" href={to} />
      <p className="m-auto">
        {message || "Redirecting to"}{" "}
        <Link href={to}>new documentation location</Link>...
      </p>
    </>
  );
}
