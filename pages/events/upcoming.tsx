import Link from "next/link";
//
import { formatDateSimple, formatTimeSimple } from "@/lib/formatters/dates";
//
import Page from "@/components/page";
//
import ArrowUpRight from "@/icons/arrow-up-right";

const events = [
  {
    id: 1,
    name: "Michael Weitzenhoffer @ Vernon's Speakeasy",
    timeStart: new Date("1/18/23 18:00"),
    timeEnd: new Date("1/18/23 21:00"),
    location: { name: "Vernon's Speakeasy" },
  },
  {
    id: 2,
    name: "Not Real Festival",
    timeStart: new Date("1/20/23 18:00"),
    timeEnd: new Date("1/20/23 21:00"),
    location: { name: "Balloon Fiesta" },
  },
  {
    id: 3,
    name: "Michael Weitzenhoffer @ Vernon's Speakeasy",
    timeStart: new Date("1/25/23 18:00"),
    timeEnd: new Date("1/25/23 21:00"),
    location: { name: "Vernon's Speakeasy" },
  },
  {
    id: 4,
    name: "Hoping for Overflow",
    timeStart: new Date("1/25/23 18:00"),
    timeEnd: new Date("1/25/23 21:00"),
    location: { name: "Vernon's Speakeasy" },
  },
  {
    id: 5,
    name: "Hoping for Overflow",
    timeStart: new Date("1/25/23 18:00"),
    timeEnd: new Date("1/25/23 21:00"),
    location: { name: "Vernon's Speakeasy" },
  },
];

export default function UpcomingEventsPage() {
  return (
    <Page header="Upcoming Events" seoTitle="Upcoming Events">
      <div className="px-4 pb-8">
        <div className="flex flex-col gap-y-4">
          {events.map((event) => (
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
                    <p>{formatDateSimple(event.timeStart)}</p>
                    <p className="text-xs font-light tracking-wide">{`${formatTimeSimple(
                      event.timeStart
                    )} - ${formatTimeSimple(event.timeEnd)}`}</p>
                  </div>

                  {/* location */}
                  <p className="text-sm">{event.location.name}</p>
                </div>
              </section>
            </Link>
          ))}
        </div>
      </div>
    </Page>
  );
}
