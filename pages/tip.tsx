import Page from "@/components/page";

const services = [
  {
    name: "Venmo",
    path: "https://account.venmo.com/u/weitzenhoffer",
  },
  {
    name: "Cash App",
    path: "https://cash.app/$MikeWeitz",
  },
  {
    name: "PayPal",
    path: "https://paypal.me/weitzenhoffer",
  },
];

export default function TipPage() {
  return (
    <Page header="Send a Tip" seoTitle="Tips">
      <div className="mx-auto grid w-full max-w-xs gap-4">
        {services.map((service, i) => (
          <a
            key={i}
            href={service.path}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-black bg-opacity-50 py-8 text-center"
          >
            {service.name}
          </a>
        ))}
      </div>
    </Page>
  );
}
