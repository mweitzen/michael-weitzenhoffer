import PageComponent from "@/components/page";
import ActionBar from "@/components/action-bar";
//
import Banknotes from "@/icons/banknotes";
import ChatBubble from "@/icons/chat-bubble";
import RequestIcon from "@/icons/request";

export default function AppHomePage() {
  return (
    <PageComponent header="Interact Live App" seoTitle="App">
      <div className="text-center">
        <p>Coming Soon</p>
        <br />
        <br />
        <p>Explore below</p>
      </div>

      <ActionBar
        actions={[
          {
            type: "link",
            internal: true,
            href: "/songs",
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
            href: "/contact",
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
            href: "/tip",
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
