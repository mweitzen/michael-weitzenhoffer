import { useRouter } from "next/router";
//
import { formatDateSimple, formatTimeSimple } from "@/lib/formatters/dates";
//
import Page from "@/components/page";
import ActionBar from "@/components/action-bar";
import ArrowUpRightOnSquare from "@/icons/arrow-up-right-on-square";

const event = {
  id: 1,
  name: "Michael Weitzenhoffer @ Vernon's Speakeasy",
  timeStart: new Date("1/18/23 18:00"),
  timeEnd: new Date("1/18/23 21:00"),
  location: {
    name: "Vernon's Speakeasy",
    address: "6588 4th St, Los Ranchos, Albuquerque, NM",
  },
};

export default function EventDetailPage() {
  const {
    query: { id: eventId },
  } = useRouter();

  return (
    <Page header="Event Detail Page" seoTitle="Event Detail">
      <div className="space-y-2 px-4">
        <h2 className="text-xl">{event.name}</h2>
        <div>
          <p>Location:</p>
          <p>{event.location.name}</p>
          <p>{event.location.address}</p>
        </div>
        <div>
          <p>Date</p>
          <p>{formatDateSimple(event.timeStart)}</p>
        </div>
        <div>
          <p>Time</p>
          <p>{`${formatTimeSimple(event.timeStart)} - ${formatTimeSimple(
            event.timeEnd
          )}`}</p>
        </div>
      </div>

      <ActionBar
        actions={[
          {
            type: "link",
            internal: false,
            href: "/",
            children: (
              <>
                <ArrowUpRightOnSquare />
                Visit
              </>
            ),
          },
          {
            type: "link",
            internal: true,
            href: "/",
            children: <>Home</>,
          },
          {
            type: "link",
            internal: true,
            href: "/",
            children: <>Home</>,
          },
        ]}
      />
    </Page>
  );
}
