import { api } from "@/lib/api";

export default function Home() {
  const { data } = api.user.getAll.useQuery();

  console.log(data);

  return (
    <main className="flex h-full w-full flex-col items-center justify-center text-3xl font-thin">
      <h1>Michael Weitzenhoffer</h1>
    </main>
  );
}
