import SEO from "@/components/seo";
import { useDisplayContext } from "@/context/display";

export default function HomePage() {
  const { setShowMenu } = useDisplayContext();

  return (
    <>
      <SEO title="Home" />
      <div className="flex h-full items-center justify-center">
        <button
          className="space-y-1 text-center"
          onClick={() => setShowMenu(true)}
        >
          <h1 className="text-3xl font-thin">Michael Weitzenhoffer</h1>
          <p className="text-xs font-light uppercase tracking-widest">
            Pianist | Musician
          </p>
        </button>
      </div>
    </>
  );
}
