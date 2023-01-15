import PageComponent from "@/components/page";

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
          With a highly varied taste in music and a large repertoire, he loves
          taking requests and is always happy to learn a new tune.
        </p>
      </section>
    </PageComponent>
  );
}
