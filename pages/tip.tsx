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

const ServiceLink = ({ service }: { service: (typeof services)[0] }) => (
  <a
    href={service.path}
    target="_blank"
    rel="noopener noreferrer"
    className="w-full bg-white bg-opacity-5 py-8 text-center"
  >
    {service.name}
  </a>
);

export default function TipPage() {
  return (
    <Page header="Send a Tip" seoTitle="Send Tip">
      <div className="mx-auto grid w-full max-w-xs gap-4">
        {/* SERVICE LINKS */}
        {services.map((service, i) => (
          <ServiceLink key={i} service={service} />
        ))}

        {/* THANK YOU */}
        <p className="mt-4 text-center text-xs uppercase leading-6 tracking-widest">
          Your support is
          <br />
          greatly appreciated
        </p>
        <div className="mx-auto h-[1px] w-24 bg-white" />
      </div>
    </Page>
  );
}
