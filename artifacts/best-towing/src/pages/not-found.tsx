export default function NotFound() {
  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center bg-background">
      <h1 className="text-4xl font-bold font-heading text-foreground">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found</p>
      <a
        href="/"
        className="mt-6 rounded-md bg-primary px-4 py-2 font-heading font-semibold text-primary-foreground hover:bg-accent transition-colors"
      >
        Return Home
      </a>
    </div>
  );
}
