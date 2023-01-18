import Link from "next/link";
//
import { api } from "@/lib/api";
import { formatDateSimple, formatTimeSimple } from "@/lib/formatters/dates";
//
import Page from "@/components/page";
//
import ArrowUpRight from "@/icons/arrow-up-right";

export default function UpcomingEventsPage() {
  const { data: events, isLoading } = api.events.getUpcoming.useQuery();

  return (
    <Page header="Upcoming Events" seoTitle="Upcoming Events">
      <div className="flex flex-col gap-y-4 pb-8">
        {isLoading ? (
          <div>Loading...</div>
        ) : !events || events.length === 0 ? (
          <div>No Content.</div>
        ) : (
          events.map((event) => (
            <Link key={event.id} href={`${event.id}`}>
              <section className="relative space-y-1 bg-white bg-opacity-5 p-4">
                {/* title */}
                <div className="flex items-center justify-between gap-x-4">
                  <h2 className="truncate text-lg font-light tracking-tight">
                    {event.name}
                  </h2>
                  <ArrowUpRight className="shrink-0" />
                </div>

                {/* day/time */}
                <div>
                  <p>{formatDateSimple(event.timeStart)}</p>
                  <p className="text-xs font-light tracking-wide text-light">{`${formatTimeSimple(
                    event.timeStart
                  )} - ${formatTimeSimple(event.timeEnd)}`}</p>
                </div>

                {/* location */}
                <p className="text-sm">{event.location.name}</p>
              </section>
            </Link>
          ))
        )}
      </div>
    </Page>
  );
}
