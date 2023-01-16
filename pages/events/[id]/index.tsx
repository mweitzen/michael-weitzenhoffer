import { useRouter } from "next/router";
//
import { formatDateSimple, formatTimeSimple } from "@/lib/formatters/dates";
//
import Page from "@/components/page";

const event = {
  id: 1,
  name: "Michael Weitzenhoffer @ Vernon's Speakeasy",
  timeStart: new Date("1/18/23 18:00"),
  timeEnd: new Date("1/18/23 21:00"),
  location: { name: "Vernon's Speakeasy" },
};

export default function EventDetailPage() {
  const {
    query: { id: eventId },
  } = useRouter();

  return (
    <Page header="Event Detail Page" seoTitle="Event Detail">
      <div className="px-4">
        <p>{event.name}</p>
        <p>Location:</p>
        <p>{event.location.name}</p>
        <p>Date</p>
        <p>{formatDateSimple(event.timeStart)}</p>
        <p>Time</p>
        <p className="text-xs font-light">{`${formatTimeSimple(
          event.timeStart
        )} - ${formatTimeSimple(event.timeEnd)}`}</p>
      </div>
    </Page>
  );
}
