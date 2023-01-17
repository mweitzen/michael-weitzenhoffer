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
        <div>
          <p className="text-sm">Email</p>
          <p>{email}</p>
          {/* <input
            readOnly
            value={email}
            onFocus={(e) => {
              copyToClipboard(e.target.value);
            }}
            className="w-full bg-black py-3 text-center"
          /> */}
        </div>
        <div>
          <p className="text-sm">Phone</p>
          <p>{phone}</p>
        </div>
        <div>
          <p className="text-sm">Instagram</p>
          <p>{instagram}</p>
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
