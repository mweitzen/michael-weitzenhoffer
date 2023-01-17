import ActionBar from "@/components/action-bar";
import PageComponent from "@/components/page";
import Banknotes from "@/icons/banknotes";
import ChatBubble from "@/icons/chat-bubble";
import CurrencyDollar from "@/icons/currency-dollar";
import RequestIcon from "@/icons/request";

export default function AppHomePage() {
  return (
    <PageComponent header="Interact Live App" seoTitle="App">
      <div className="text-center">Coming Soon</div>

      <ActionBar
        actions={[
          {
            type: "link",
            internal: true,
            href: "",
            children: (
              <>
                <RequestIcon />
                Request
              </>
            ),
          },
          {
            type: "link",
            internal: true,
            href: "",
            children: (
              <>
                <ChatBubble />
                Message
              </>
            ),
          },
          {
            type: "link",
            internal: true,
            href: "",
            children: (
              <>
                <Banknotes />
                Tip
              </>
            ),
          },
        ]}
      />
    </PageComponent>
  );
}
