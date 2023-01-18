import { useRouter } from "next/router";
//
import { api } from "@/lib/api";
import { formatDateSimple, formatTimeSimple } from "@/lib/formatters/dates";
//
import Page from "@/components/page";
import ActionBar from "@/components/action-bar";
//
import ArrowUpRightOnSquare from "@/icons/arrow-up-right-on-square";

export default function EventDetailPage() {
  let {
    query: { id: eventId },
    isReady,
  } = useRouter();

  if (typeof eventId !== "string") {
    eventId = "";
  }
  if (!isReady) {
    eventId = "stall";
  }

  const { data: event, isLoading } = api.events.getById.useQuery({
    eventId: eventId,
  });

  return (
    <Page header="Event Detail Page" seoTitle="Event Detail">
      {isLoading ? (
        <div>Loading...</div>
      ) : !event ? (
        <div>Opps. no event</div>
      ) : (
        <div className="space-y-2 px-4">
          <h2 className="text-xl">{event.name}</h2>
          <div>
            <p>Location:</p>
            <p>{event.location.name}</p>
            <p>{event.stage.name}</p>
            <p>{event.location.address.complete}</p>
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
          <p>{event.description}</p>
        </div>
      )}

      <ActionBar
        actions={[
          {
            type: "link",
            internal: false,
            href: isLoading ? "/" : event.location.website,
            target: "_blank",
            children: (
              <>
                <ArrowUpRightOnSquare />
                Visit
              </>
            ),
          },
          {
            type: "link",
            internal: false,
            href: isLoading ? "/" : event.rsvpLink,
            target: "_blank",
            children: <>Reservation</>,
          },
        ]}
      />
    </Page>
  );
}
