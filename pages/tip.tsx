import PageComponent from "@/components/page";

export default function TipPage() {
  return (
    <PageComponent header="Pay it Forward" seoTitle="Tips">
      <div className="space-y-8 text-center">
        <h1>Tip Page</h1>
        <ul className="text-base">
          <li>Link to Venmo</li>
          <li>Link to Cash App</li>
          <li>Link to other Financial Service</li>
        </ul>
      </div>
    </PageComponent>
  );
}
