import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
//
import { api } from "@/lib/api";
import prisma from "@/lib/prisma";
import { formatDateSimple, formatTimeSimple } from "@/lib/formatters/dates";
//
import Page from "@/components/page";
import ActionBar from "@/components/action-bar";
//
import ArrowUpRightOnSquare from "@/icons/arrow-up-right-on-square";
import CalendarDays from "@/icons/calendar-days";

const EventDetailLoadingState = () => (
  <div className="bg-white bg-opacity-5 p-4">Loading...</div>
);

const EventDetailEmptyState = () => (
  <div className="bg-white bg-opacity-5 p-4">No events match.</div>
);

export default function EventDetailPage(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { data: event, isLoading } = api.events.getById.useQuery({
    eventId: props.id || "",
  });

  return (
    <Page header="Event Detail Page" seoTitle="Event Detail">
      {isLoading ? (
        <EventDetailLoadingState />
      ) : !event ? (
        <EventDetailEmptyState />
      ) : (
        <div className="space-y-4 px-4">
          <h2 className="text-xl">{event.name}</h2>
          <div>
            <p className="text-sm">Location:</p>
            <p>{event.location.name}</p>
            <p>{event.stage?.name}</p>
            <p>{event.location.address.complete}</p>
          </div>
          <div>
            <p className="text-sm">Date</p>
            <p>{formatDateSimple(event.timeStart || new Date())}</p>
          </div>
          <div>
            <p className="text-sm">Time</p>
            <p>{`${formatTimeSimple(
              event.timeStart || new Date()
            )} - ${formatTimeSimple(event.timeEnd || new Date())}`}</p>
          </div>
          <p>{event.description}</p>
        </div>
      )}

      <ActionBar
        actions={[
          {
            type: "link",
            internal: false,
            href: isLoading ? "/" : (event && event.location.website) || "",
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
            href: isLoading ? "/" : (event && event.rsvpLink) || "",
            target: "_blank",
            children: (
              <>
                <CalendarDays />
                Reservation
              </>
            ),
          },
        ]}
      />
    </Page>
  );
}

export async function getStaticPaths() {
  const events = await prisma.event.findMany();
  const paths = events.map((event) => ({ params: { id: event.id } }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  if (context.params) {
    return {
      props: {
        id: context.params.id,
      },
    };
  }
  return { props: {} };
}
