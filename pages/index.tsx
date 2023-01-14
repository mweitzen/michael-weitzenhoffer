import AuthShowcase from "@/components/auth-showcase";
import SEO from "@/components/seo";

export default function Home() {
  return (
    <>
      <SEO title="Pianist" />
      <main className="flex h-full w-full flex-col items-center justify-center">
        <h1>Neutron</h1>
        <AuthShowcase />
      </main>
    </>
  );
}
