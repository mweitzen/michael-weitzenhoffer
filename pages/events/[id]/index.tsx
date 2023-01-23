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

/*
 *
 * STATIC SITE GENERATION
 *
 */
export async function getStaticPaths() {
  const events = await prisma.event.findMany();
  const paths = events.map((event) => ({ params: { id: event.id } }));
  return {
    paths: paths,
    fallback: false,
  };
}

type StaticProps = InferGetStaticPropsType<typeof getStaticProps>;

export async function getStaticProps(
  context: GetStaticPropsContext<{ id: string }>
) {
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: context.params.id,
    },
  };
}

/*
 *
 * PAGE
 *
 */
export default function EventDetailPage(props: StaticProps) {
  const { data: event, isLoading } = api.events.getById.useQuery({
    eventId: props.id,
  });

  return (
    <Page header="Event Detail Page" seoTitle="Event Detail">
      {isLoading || !event ? null : (
        <>
          <div className="space-y-4 px-4 pb-8">
            <h2 className="text-xl">{event.name}</h2>
            <div>
              <p className="text-sm">Location:</p>
              <p>{event.location.name}</p>
              <p>{event.stage?.name}</p>
              <p>{event.location.address.complete}</p>
            </div>
            <div>
              <p className="text-sm">Date</p>
              <p>
                {event.timeStart
                  ? formatDateSimple(event.timeStart)
                  : "Not scheduled."}
              </p>
            </div>
            <div>
              <p className="text-sm">Time</p>
              <p>
                {event.timeStart
                  ? formatTimeSimple(event.timeStart)
                  : "No time set."}
                {event.timeEnd ? ` - ${formatTimeSimple(event.timeEnd)}` : ""}
              </p>
            </div>
            <p>{event.description}</p>
          </div>

          <ActionBar
            actions={[
              {
                type: "link",
                internal: false,
                href: event.location.website || "",
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
                href: event.rsvpLink || "",
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
        </>
      )}
    </Page>
  );
}
