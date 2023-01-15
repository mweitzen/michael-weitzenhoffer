import SEO from "@/components/seo";

export default function HomePage() {
  return (
    <>
      <SEO title="Home" />
      <div className="flex h-full items-center justify-center">
        <div className="grid gap-1 text-center">
          <h1 className="text-2xl font-thin">Michael Weitzenhoffer</h1>
          <p className="text-xs font-light uppercase tracking-widest">
            Pianist | Musician
          </p>
        </div>
      </div>
    </>
  );
}
