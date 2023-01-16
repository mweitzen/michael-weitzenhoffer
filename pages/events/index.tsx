import { api } from "@/lib/api";
//
import Page from "@/components/page";

export default function EventsListPage() {
  const { data, isLoading } = api.events.getAll.useQuery();

  return (
    <Page header="All Events">
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {data ? (
              data.map((item, i) => <p key={i}>Event</p>)
            ) : (
              <p>No events.</p>
            )}
          </div>
        )}
      </div>
    </Page>
  );
}
