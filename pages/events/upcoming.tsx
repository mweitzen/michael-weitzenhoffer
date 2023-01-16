import Link from "next/link";
//
import { formatDateSimple, formatTimeSimple } from "@/lib/formatters/dates";
//
import PageComponent from "@/components/page";

const events = [
  {
    id: 1,
    name: "Michael Weitzenhoffer @ Vernon's Speakeasy",
    timeStart: new Date("1/18/23 18:00"),
    timeEnd: new Date("1/18/23 21:00"),
    location: { name: "Vernon's Speakeasy" },
  },
];

export default function UpcomingEventsPage() {
  return (
    <PageComponent header="Upcoming Events" seoTitle="Upcoming Events">
      <div className="px-4">
        <div className="flex flex-col">
          {events.map((event) => (
            <Link key={event.id} href={`${event.id}`}>
              <section className="relative bg-black p-4">
                <span className="absolute right-0 top-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </span>
                <h2 className="truncate">{event.name}</h2>
                <p>{formatDateSimple(event.timeStart)}</p>
                <p className="text-xs font-light tracking-wide">{`${formatTimeSimple(
                  event.timeStart
                )} - ${formatTimeSimple(event.timeEnd)}`}</p>
                <p>{event.location.name}</p>
              </section>
            </Link>
          ))}
        </div>
      </div>
    </PageComponent>
  );
}
