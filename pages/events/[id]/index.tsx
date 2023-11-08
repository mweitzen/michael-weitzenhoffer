import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
//
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

  const eventRaw = await prisma.event.findUnique({
    where: {
      id: context.params.id,
    },
    include: {
      location: true,
      performing_artist: true,
      performing_group: true,
      stage: true,
    },
  });

  const event: typeof eventRaw = JSON.parse(JSON.stringify(eventRaw));

  if (!event) throw new Error("wtf......");

  return {
    props: {
      id: context.params.id,
      event,
    },
  };
}

/*
 *
 * PAGE
 *
 */
export default function EventDetailPage({ event }: StaticProps) {
  return (
    <Page header="Event Details" seoTitle="Event Detail">
      <>
        <div className="space-y-4 px-4 pb-8">
          <h2 className="text-2xl">{event.name}</h2>
          <div>
            <p className="text-sm text-gray-400">Location:</p>
            <div className="flex flex-col gap-2">
              <div>
                <p className="text-xl">{event.location.name}</p>
                <p>{event.stage?.name}</p>
              </div>
              <p className="text-sm text-gray-200">{event.location.address}</p>
            </div>
          </div>
          <div>
            <p className="text-sm  text-gray-400">Date</p>
            <p>
              {event.time_start
                ? formatDateSimple(event.time_start)
                : "Not scheduled."}
            </p>
          </div>
          <div>
            <p className="text-sm  text-gray-400">Time</p>
            <p>
              {event.time_start
                ? formatTimeSimple(event.time_start)
                : "No time set."}
              {event.time_end ? ` - ${formatTimeSimple(event.time_end)}` : ""}
            </p>
          </div>
          <div>
            <p className="text-sm  text-gray-400">Description</p>
            <p className="text-sm">{event.description}</p>
          </div>
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
              href: event.rsvp_link || "",
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
    </Page>
  );
}
