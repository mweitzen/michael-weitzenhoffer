import Page from "@/components/page";
import ButtonLink from "@/components/button-link";

export default function TipPage() {
  return (
    <Page header="Send a Tip" seoTitle="Tips">
      <div className="mx-auto grid w-full max-w-xs gap-4">
        <ButtonLink
          href="https://account.venmo.com/u/weitzenhoffer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Venmo
        </ButtonLink>

        <ButtonLink
          href="https://www.paypal.com/donate/?hosted_button_id=HZ6YUPDNUZTVL"
          target="_blank"
          rel="noopener noreferrer"
        >
          PayPal (Online)
        </ButtonLink>

        <ButtonLink
          href="https://paypal.me/weitzenhoffer"
          target="_blank"
          rel="noopener noreferrer"
        >
          PayPal (App)
        </ButtonLink>
      </div>
    </Page>
  );
}
