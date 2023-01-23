import Link from "next/link";
import PageComponent from "@/components/page";

export default function AboutPage() {
  return (
    <PageComponent header="About Michael" seoTitle="About">
      <section className="space-y-8 px-4 leading-loose">
        <p>
          Originally from Ohio, Michael Weitzenhoffer is a piano player based in
          Albuquerque, New Mexico.
        </p>
        <p>
          Micahel studied the piano at Kent State University with Dr. Sebastian
          Birch, where he earned his degree in music.
        </p>
        <p>
          With a varied interest in all musical genres and a large repertoire,
          he loves taking requests and is always happy to learn a new tune.
        </p>
      </section>

      <Link href="/contact">
        <div className="mt-8 w-full bg-white bg-opacity-5 py-8 text-center uppercase tracking-widest">
          Go to contact page
        </div>
      </Link>
    </PageComponent>
  );
}
