import Link from "next/link";
import { api } from "@/lib/api";
import { formatDateSimple, formatTimeSimple } from "@/lib/formatters/dates";
import Page from "@/components/page";
import ArrowUpRight from "@/icons/arrow-up-right";

const EventLoadingState = () => (
  <section className="animate-pulse space-y-1 bg-white bg-opacity-5 p-4">
    <div className="h-7 w-full bg-black bg-opacity-25" />
    <div>
      <div className="h-6 w-full bg-black bg-opacity-25" />
      <div className="h-4 w-full bg-black bg-opacity-25" />
    </div>
    <div className="h-5 w-full bg-black bg-opacity-25" />
  </section>
);

const EmptyState = () => (
  <section className="space-y-1 bg-white bg-opacity-5 p-4">
    <p className="text-lg font-light tracking-tight">No upcoming events.</p>
    <div>
      <div className="h-6" />
      <div className="h-4" />
    </div>
    <div className="h-5" />
  </section>
);

const EventLink = ({ event }: { event: any }) => (
  <Link href={`${event.id}`}>
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
        <p>{formatDateSimple(event.time_start)}</p>
        <p className="text-xs font-light tracking-wide text-light">{`${formatTimeSimple(
          event.time_start
        )} ${
          event.time_end ? `- ${formatTimeSimple(event.time_end)}` : ""
        }`}</p>
      </div>

      {/* location */}
      <p className="text-sm">{event.location.name}</p>
    </section>
  </Link>
);

export default function EventsListPage() {
  const { data: events, isLoading } = api.events.getAll.useQuery();

  return (
    <Page header="Upcoming Events" seoTitle="Upcoming Events">
      <div className="flex flex-col gap-y-4 pb-8">
        {isLoading ? (
          <>
            <EventLoadingState />
            <EventLoadingState />
            <EventLoadingState />
          </>
        ) : !events || events.length === 0 ? (
          <EmptyState />
        ) : (
          events.map((event) => <EventLink key={event.id} event={event} />)
        )}
      </div>
    </Page>
  );
}
