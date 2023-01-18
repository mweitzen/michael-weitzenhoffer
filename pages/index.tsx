import { useDisplayContext } from "@/context/display";
import SEO from "@/components/seo";
import { api } from "@/lib/api";

const seoTitle = "Pianist";
const header = "Michael Weitzenhoffer";
const subheader = "Pianist | Musician";

export default function HomePage() {
  const { setShowMenu } = useDisplayContext();
  const { data } = api.locations.getAll.useQuery();
  data?.forEach((item) => console.log(JSON.stringify(item)));
  return (
    <>
      <SEO title={seoTitle} />
      <div className="flex h-full items-center justify-center">
        <button
          className="space-y-1 text-center"
          onClick={() => setShowMenu(true)}
        >
          <h1 className="text-3xl font-thin">{header}</h1>
          <p className="text-xs font-light uppercase tracking-widest">
            {subheader}
          </p>
        </button>
      </div>
    </>
  );
}
