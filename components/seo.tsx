import Head from "next/head";

const meta = {
  title: "Michael Weitzenhoffer",
  description:
    "Michael Weitzenhoffer is a piano player based in Albuquerque, New Mexico. With a highly varied taste in music and a large repertoire, he loves taking requests and is always happy to learn a new tune.",
  logo: "/favicon.ico",
  themeColor: "#7b46f6",
};

interface SEOProps {
  title?: string;
  children?: React.ReactNode | React.ReactNode[];
}

const SEO: React.FC<SEOProps> = ({ title, children }) => {
  const providedTitle = title ? ` | ${title}` : "";
  const reconciledTitle = meta.title + providedTitle;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <link rel="icon" href={meta.logo} />
      <link rel="shortcut icon" type="image/x-icon" href={meta.logo} />
      <link rel="apple-touch-icon" sizes="180x180" href={meta.logo} />
      <meta name="theme-color" content={meta.themeColor} />

      <title>{reconciledTitle}</title>
      <meta name="description" content={meta.description} />

      <meta itemProp="name" content={meta.title} />
      <meta itemProp="description" content={meta.description} />
      <meta itemProp="image" content={meta.logo} />
      <meta name="description" content={meta.description} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.logo} />
      <meta property="og:type" content="website" />

      {children}
    </Head>
  );
};

export default SEO;
