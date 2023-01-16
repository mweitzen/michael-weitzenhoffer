import Link from "next/link";
import { api } from "@/lib/api";
import { formatDateSimple, formatTimeSimple } from "@/lib/formatters/dates";
//
import Page from "@/components/page";
import ArrowUpRight from "@/icons/arrow-up-right";

export default function EventsListPage() {
  const { data, isLoading } = api.events.getAll.useQuery();

  return (
    <Page header="All Events">
      <div className="px-4 pb-8">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex flex-col gap-y-4">
            {data && data.length !== 0 ? (
              data.map((event) => (
                <Link key={event.id} href={`${event.id}`}>
                  <section className="relative bg-black bg-opacity-75 p-4">
                    <div className="space-y-1">
                      {/* title */}
                      <div className="flex items-center justify-between gap-x-4">
                        <h2 className="truncate text-lg font-light tracking-tight">
                          {event.name}
                        </h2>
                        <ArrowUpRight className="shrink-0" />
                      </div>

                      {/* day/time */}
                      <div>
                        <p>{formatDateSimple(event.timeStart!)}</p>
                        <p className="text-xs font-light tracking-wide">{`${formatTimeSimple(
                          event.timeStart!
                        )} - ${formatTimeSimple(event.timeEnd!)}`}</p>
                      </div>

                      {/* location */}
                      {/* <p className="text-sm">{event.location.name}</p> */}
                    </div>
                  </section>
                </Link>
              ))
            ) : (
              <p>No events.</p>
            )}
          </div>
        )}
      </div>
    </Page>
  );
}
