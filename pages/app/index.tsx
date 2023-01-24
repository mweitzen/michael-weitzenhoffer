import PageComponent from "@/components/page";
import ActionBar from "@/components/action-bar";
//
import Banknotes from "@/icons/banknotes";
import ChatBubble from "@/icons/chat-bubble";
import RequestIcon from "@/icons/request";

export default function AppHomePage() {
  return (
    <PageComponent header="Interact Live App" seoTitle="App">
      <div className="space-y-8 pb-8">
        <div>
          <h2 className="text-center text-sm uppercase tracking-widest">
            Coming Soon
          </h2>
          <div className="mx-auto my-2 h-[1px] w-16 bg-white" />
        </div>
        <p className="text-center">
          Explore the bottom bar for existing interactions.
        </p>
        <div className="text-center">
          <p className="mb-4 text-lg text-light">Planned features include:</p>
          <ul className="mx-auto w-full max-w-xs list-disc space-y-3 text-start">
            <li>See currently playing song</li>
            <li>See upcoming (and previously played) songs</li>
            <li>Request songs, see your requests happen live, and comment</li>
            <li>Interact with other guests also using the app</li>
            <li>Directly message the performer or send tips virtually</li>
          </ul>
        </div>
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
