import PageComponent from "@/components/page";
import ChevronUpDown from "@/icons/chevron-up-down";
import MagnifyingGlass from "@/icons/magnifying-glass";

const songs = [
  {
    artist: "Miley Cyrus",
    title: "Flowers",
    genre: "Pop",
    year: 2023,
  },
  {
    artist: "Bruno Mars",
    title: "When I Was Your Man",
    genre: "Pop",
    year: 2013,
  },
];

export default function AllSongsListPage() {
  return (
    <PageComponent header="Michael's Repertoire" seoTitle="Repertoire">
      <div className="relative">
        <MagnifyingGlass className="absolute top-3 left-3 text-black" />
        <input
          type="search"
          placeholder="Search by song or artist"
          className="w-full pl-10"
        />
      </div>
      <div className="flex w-full gap-x-2">
        <div className="flex flex-1 items-center justify-between bg-black py-2 px-4">
          Artist
          <ChevronUpDown />
        </div>
        <div className="flex flex-1 items-center justify-between bg-black py-2 px-4">
          Genre
          <ChevronUpDown />
        </div>
        <div className="flex flex-1 items-center justify-between bg-black py-2 px-4">
          Decade
          <ChevronUpDown />
        </div>
      </div>
      <div className="grid gap-y-2">
        {songs.map((song, i) => (
          <div key={i} className="bg-black bg-opacity-50 py-8">
            <p>{song.title}</p>
            <p>{song.artist}</p>
            <p>{song.year}</p>
          </div>
        ))}
      </div>
    </PageComponent>
  );
}
