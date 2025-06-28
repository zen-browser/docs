import Link from 'next/link';

export default function BuildingRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="2;url=/contribute/desktop" />
      <link rel="canonical" href="/contribute/desktop" />
      <p className='m-auto'>Redirecting to <Link href="/contribute/desktop">new documentation location</Link>...</p>
    </>
  );
}
