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

export default function EventDetailPage({
  event,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page header="Event Detail Page" seoTitle="Event Detail">
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
  if (!context.params) {
    return {
      notFound: true,
    };
  }

  const event = await prisma.event.findUnique({
    where: {
      id: context.params.id,
    },
    include: {
      location: {
        include: {
          address: true,
        },
      },
      performingArtist: true,
      performingGroup: true,
      stage: true,
    },
  });

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event,
    },
  };
}
