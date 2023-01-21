import PageComponent from "@/components/page";
import ActionBar from "@/components/action-bar";
//
import Banknotes from "@/icons/banknotes";
import ChatBubble from "@/icons/chat-bubble";
import RequestIcon from "@/icons/request";

export default function AppHomePage() {
  return (
    <PageComponent header="Interact Live App" seoTitle="App">
      <div className="flex flex-col gap-y-4">
        <div className="w-full bg-white bg-opacity-5 p-4">
          <h2 className="text-center text-sm uppercase tracking-widest">
            Now Playing
          </h2>
          <div className="mx-auto my-4 h-[1px] w-24 bg-white" />
          <div className="space-y-2">
            <span>
              <p>Song</p>
              <p className="text-sm">Artist</p>
              <p className="text-sm text-light">2021</p>
            </span>
            <span className="flex items-center justify-between">
              <p>Requested By:</p>
              <p>Name</p>
            </span>
          </div>
        </div>
        <div className="w-full bg-white bg-opacity-5 p-4">
          <h2 className="text-center text-sm uppercase tracking-widest">
            Upcoming Songs
          </h2>
          <div className="mx-auto my-4 h-[1px] w-24 bg-white" />
          <div className="space-y-2">
            <div>
              <p>Song</p>
              <p className="text-sm">Artist</p>
              <p className="text-sm text-light">2001</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Requested By:</p>
              <p>Name</p>
            </div>
          </div>
        </div>
        <button>See the previous songs played</button>
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
