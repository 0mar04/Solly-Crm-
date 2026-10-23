export default function Loading() {
  return (
    <main className="site-container flex min-h-dvh items-center py-12" aria-busy="true">
      <span className="sr-only">Loading</span>
      <div className="mx-auto h-52 w-full max-w-2xl animate-pulse rounded-xl bg-surface-muted" />
    </main>
  );
}
