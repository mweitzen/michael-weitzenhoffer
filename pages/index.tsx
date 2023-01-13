import AuthShowcase from "@/components/auth-showcase";
import SEO from "@/components/seo";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <SEO title="Pianist" />
      <main className={inter.className}>
        <h1>Neutron</h1>
        <AuthShowcase />
      </main>
    </>
  );
}
