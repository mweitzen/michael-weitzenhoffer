import { useRef, useState } from "react";
//
import { api } from "@/lib/api";
import { Song, Artist } from "@prisma/client";
import { Transition, Listbox } from "@headlessui/react";
//
import PageComponent from "@/components/page";
//
import ChevronUpDown from "@/icons/chevron-up-down";
import MagnifyingGlass from "@/icons/magnifying-glass";

// const ListboxDemo = () => {
//   return (
//     <Listbox as="div" className="relative flex-1">
//       <Listbox.Button className="flex w-full items-center justify-between border border-dark-purple bg-white bg-opacity-5 py-2 px-4">
//         Artist
//         <ChevronUpDown className="pointer-events-none" />
//       </Listbox.Button>
//       <Transition>
//         <Listbox.Options className="absolute mt-1 max-h-60 overflow-auto bg-white bg-opacity-5 py-2 px-4 text-sm ring-1 ring-purple-900">
//           <Listbox.Option value={"deeznutz"}>Suxk Deez Nuts</Listbox.Option>
//         </Listbox.Options>
//       </Transition>
//     </Listbox>
//   );
// };

const SongLoadingState = () => (
  <div className="bg-white bg-opacity-5 p-4">Loading...</div>
);

const SongEmptyState = () => (
  <div className="bg-white bg-opacity-5 p-4">No songs match.</div>
);

const SongListItem = ({
  song,
}: {
  song: Song & {
    artist: Artist;
  };
}) => (
  <div className="bg-white bg-opacity-5 p-4">
    <p>{song.title}</p>
    <p className="text-sm">{song.artist.name}</p>
    <p className="text-sm text-light">{song.year}</p>
  </div>
);

export default function AllSongsListPage() {
  const [searchText, setSearchText] = useState("");
  const [artistFilter, setArtistFilter] = useState<any[]>();
  const [genreFilter, setGenreFilter] = useState<any[]>();
  const [decadeFilter, setDecadeFilter] = useState<number>();

  const { data, isLoading } = api.songs.getAll.useQuery();

  let songs = data;

  if (!!songs) {
    if (!!artistFilter) {
      songs = songs.filter((song) => artistFilter.includes(song.artist.name));
    }
    if (!!genreFilter) {
      songs = songs.filter((song) => genreFilter.includes(song.genre));
    }
    if (!!decadeFilter) {
      songs = songs.filter(
        (song) =>
          song.year &&
          song.year >= decadeFilter &&
          song.year <= decadeFilter + 9
      );
    }
    if (!!searchText) {
      songs = songs.filter(
        (song) =>
          song.title
            .toLowerCase()
            .replaceAll(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, "")
            .replaceAll(" ", "")
            .includes(searchText.toLowerCase().replaceAll(" ", "")) ||
          song.artist.name
            .toLowerCase()
            .replaceAll(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, "")
            .replaceAll(" ", "")
            .includes(searchText.toLowerCase().replaceAll(" ", ""))
      );
    }
  }

  return (
    <PageComponent header="Michael's Repertoire" seoTitle="Repertoire">
      <div className="sticky -top-0 mb-8 border border-dark-purple pt-[1px] backdrop-blur">
        <div className="relative">
          <MagnifyingGlass className="absolute top-2.5 left-2.5" />
          <input
            type="search"
            placeholder="Search by song or artist"
            className="w-full border border-dark-purple bg-white bg-opacity-5 pl-10 focus:border-dark-purple focus:ring-0 focus:ring-offset-1 focus:ring-offset-purple-900"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="flex w-full">
          <div className="flex flex-1 items-center justify-between border border-dark-purple bg-white bg-opacity-5 py-2 px-4">
            Artist
            <ChevronUpDown />
          </div>
          <div className="flex flex-1 items-center justify-between border border-dark-purple bg-white bg-opacity-5 py-2 px-4">
            Genre
            <ChevronUpDown />
          </div>
          <div className="flex flex-1 items-center justify-between border border-dark-purple bg-white bg-opacity-5 py-2 px-4">
            Decade
            <ChevronUpDown />
          </div>
        </div>
      </div>

      <div className="mb-4 grid gap-y-2">
        {isLoading ? (
          <SongLoadingState />
        ) : !songs || songs.length === 0 ? (
          <SongEmptyState />
        ) : (
          songs.map((song) => <SongListItem key={song.id} song={song} />)
        )}
      </div>
    </PageComponent>
  );
}
