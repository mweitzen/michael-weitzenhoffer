import PageComponent from "@/components/page";
import Link from "next/link";

export default function AboutPage() {
  return (
    <PageComponent header="About Michael" seoTitle="About">
      <section className="px-4 leading-loose">
        <p>
          Originally from Ohio, Michael Weitzenhoffer is a piano player based in
          Albuquerque, New Mexico.
        </p>
        <br />
        <p>
          Micahel studied the piano at Kent State University with Dr. Sebastian
          Birch, where he earned his degree in music.
        </p>
        <br />
        <p>
          With a varied interest in all musical genres and a large repertoire,
          he loves taking requests and is always happy to learn a new tune.
        </p>
        <Link href="/contact">
          <div className="w-full bg-black py-16 text-center uppercase tracking-widest">
            Go to contact page
          </div>
        </Link>
      </section>
    </PageComponent>
  );
}
