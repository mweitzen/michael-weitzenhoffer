import PageComponent from "@/components/page";

export default function TipPage() {
  return (
    <PageComponent header="Pay it Forward" seoTitle="Tips">
      <div className="space-y-8 text-center">
        <ul>
          <li>
            <a
              href="venmo://users/@weitzenhoffer"
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
              PayPal
            </a>
          </li>
          <li>
            <a
              href="https://paypal.me/weitzenhoffer"
              target="_blank"
              rel="noopener noreferrer"
            >
              PayPal.me
            </a>
          </li>
        </ul>
        <div className="flex justify-center">
          <img src="qr-paypal.png" />
        </div>
      </div>
    </PageComponent>
  );
}
