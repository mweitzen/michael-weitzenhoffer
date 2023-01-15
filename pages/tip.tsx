import PageComponent from "@/components/page";

export default function TipPage() {
  return (
    <PageComponent header="Pay it Forward" seoTitle="Tips">
      <div className="space-y-8 text-center">
        <ul className="space-y-4">
          <li>
            <a
              href="https://account.venmo.com/u/weitzenhoffer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Venmo
            </a>
          </li>
          <li>
            <a
              href="https://www.paypal.com/donate/?hosted_button_id=HZ6YUPDNUZTVL"
              target="_blank"
              rel="noopener noreferrer"
            >
              PayPal (Online)
            </a>
          </li>
          <li>
            <a
              href="https://paypal.me/weitzenhoffer"
              target="_blank"
              rel="noopener noreferrer"
            >
              PayPal (App)
            </a>
          </li>
        </ul>
      </div>
    </PageComponent>
  );
}
