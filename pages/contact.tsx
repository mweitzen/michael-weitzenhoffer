import { copyToClipboard } from "@/lib/helpers/copyToClipboard";
//
import Page from "@/components/page";
import ActionBar from "@/components/action-bar";
//
import ChatBubble from "@/icons/chat-bubble";
import Envelope from "@/icons/envelope";
import Phone from "@/icons/phone";

const email = "mike@weitzenhoffer.com";
const phoneHref = "+13306124661";
const phone = "330-612-4661";
const instagram = "@mike.weitzenhoffer";

const contactItems = [
  {
    name: "Email",
    value: email,
  },
  {
    name: "Phone",
    value: phone,
  },
  {
    name: "Instagram",
    value: instagram,
  },
];

const ContactItem = ({ item }: { item: (typeof contactItems)[0] }) => (
  <div className="space-y-1">
    <p className="text-sm tracking-wide">{item.name}</p>
    <p
      className="mx-auto w-full max-w-xs bg-white bg-opacity-5 py-3 focus:ring-0 focus:ring-offset-1 focus:ring-offset-purple-900"
      onClick={() => copyToClipboard(item.value)}
    >
      {item.value}
    </p>
  </div>
);

const SocialLink = () => null;

export default function ContactPage() {
  return (
    <Page header="Contact Michael" seoTitle="Contact">
      {/* CONTACT ITEMS */}
      <section className="grid gap-y-4 text-center text-sm">
        {contactItems.map((item, i) => (
          <ContactItem key={i} item={item} />
        ))}
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
    </Page>
  );
}
