import ActionBar from "@/components/action-bar";
import PageComponent from "@/components/page";
import ChatBubble from "@/icons/chat-bubble";
import Envelope from "@/icons/envelope";
import Phone from "@/icons/phone";
import { copyToClipboard } from "@/lib/helpers/copyToClipboard";

const email = "mike@weitzenhoffer.com";
const phoneHref = "+13306124661";
const phone = "330-612-4661";
const instagram = "@mike.weitzenhoffer";

export default function ContactPage() {
  return (
    <PageComponent header="Contact Michael" seoTitle="Contact">
      {/* BASIC CONTACT INFO */}
      <section className="grid gap-y-4 text-center text-sm">
        <div className="space-y-1">
          <p className="text-sm tracking-wide">Email</p>
          <p
            className="mx-auto w-full max-w-xs bg-white bg-opacity-5 py-3 focus:ring-0 focus:ring-offset-1 focus:ring-offset-purple-900"
            onClick={() => copyToClipboard(email)}
          >
            {email}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-sm tracking-wide">Phone</p>
          <p
            className="mx-auto w-full max-w-xs bg-white bg-opacity-5 py-3 focus:ring-0 focus:ring-offset-1 focus:ring-offset-purple-900"
            onClick={() => copyToClipboard(phone)}
          >
            {phone}
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-sm tracking-wide">Instagram</p>
          <p
            className="mx-auto w-full max-w-xs bg-white bg-opacity-5 py-3 focus:ring-0 focus:ring-offset-1 focus:ring-offset-purple-900"
            onClick={() => copyToClipboard(instagram)}
          >
            {instagram}
          </p>
        </div>
      </section>

      {/* CONTACT BAR */}
      <ActionBar
        actions={[
          {
            type: "link",
            href: `tel:${phoneHref}`,
            children: (
              <>
                <Phone />
                Call Me
              </>
            ),
          },
          {
            type: "link",
            href: `sms:${phoneHref}`,
            children: (
              <>
                <ChatBubble />
                Text Me
              </>
            ),
          },
          {
            type: "link",
            href: `mailto:${email}`,
            children: (
              <>
                <Envelope />
                Email Me
              </>
            ),
          },
        ]}
      />
    </PageComponent>
  );
}
