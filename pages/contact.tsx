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
      <section className="grid gap-y-2 text-center text-sm">
        <div>
          <p>Email</p>
          <input
            readOnly
            value={email}
            onFocus={(e) => {
              copyToClipboard(e.target.value);
            }}
            className="w-full bg-black py-3 text-center"
          />
        </div>
        <div>
          <p>Phone</p>
          <input
            readOnly
            value={phone}
            onFocus={(e) => {
              copyToClipboard(e.target.value);
            }}
            className="w-full bg-black py-3 text-center"
          />
        </div>
        <div>
          <p>Instagram</p>
          <input
            readOnly
            value={instagram}
            onFocus={(e) => {
              copyToClipboard(e.target.value);
            }}
            className="w-full bg-black py-3 text-center"
          />
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
