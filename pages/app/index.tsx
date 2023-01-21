import PageComponent from "@/components/page";
import ActionBar from "@/components/action-bar";
//
import Banknotes from "@/icons/banknotes";
import ChatBubble from "@/icons/chat-bubble";
import RequestIcon from "@/icons/request";

export default function AppHomePage() {
  return (
    <PageComponent header="Interact Live App" seoTitle="App">
      <div className="space-y-8">
        {/* NOW PLAYING */}
        <div className="space-y-4">
          <div>
            <h2 className="text-center text-sm uppercase tracking-widest">
              Now Playing
            </h2>
            <div className="mx-auto my-2 h-[1px] w-16 bg-white" />
          </div>
          <div className="space-y-2 bg-white bg-opacity-5 p-4">
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

        {/* UPCOMING */}
        <div className="space-y-4">
          <div>
            <h2 className="text-center text-sm uppercase tracking-widest">
              Upcoming Songs
            </h2>
            <div className="mx-auto my-2 h-[1px] w-16 bg-white" />
          </div>
          <div className="space-y-2 bg-white bg-opacity-5 p-4">
            <span>
              <p>Song</p>
              <p className="text-sm">Artist</p>
              <p className="text-sm text-light">2001</p>
            </span>
            <span className="flex items-center justify-between">
              <p>Requested By:</p>
              <p>Name</p>
            </span>
          </div>
        </div>

        {/* PREVIOUSLY PLAYED SONGS */}
        <button className="w-full bg-white bg-opacity-5 p-4 text-sm uppercase tracking-widest">
          See previously played songs
        </button>
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
