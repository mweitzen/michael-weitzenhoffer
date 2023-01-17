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
            onClick={(e) => {
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
            onClick={(e) => {
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
            onClick={(e) => {
              copyToClipboard(e.target.value);
            }}
            className="w-full bg-black py-3 text-center"
          />
        </div>
      </section>

      {/* CONTACT BAR */}
      <footer className="fixed bottom-0 left-0 right-0 grid grid-cols-3 gap-x-2 p-4">
        <a
          href={`tel:${phoneHref}`}
          className="flex items-center justify-center gap-x-2 bg-white bg-opacity-5 py-3 text-xs uppercase tracking-widest"
        >
          <Phone />
          Call Me
        </a>
        <a
          href={`sms:${phoneHref}`}
          className="flex items-center justify-center gap-x-2 bg-white bg-opacity-5 py-3 text-xs uppercase tracking-widest"
        >
          <ChatBubble />
          Text Me
        </a>
        <a
          href={`mailto:${email}`}
          className="flex items-center justify-center gap-x-2 bg-white bg-opacity-5 py-3 text-xs uppercase tracking-widest"
        >
          <Envelope />
          Email Me
        </a>
      </footer>
    </PageComponent>
  );
}
