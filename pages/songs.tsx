import { useState } from "react";
//
import { api } from "@/lib/api";
import { Transition, Listbox } from "@headlessui/react";
//
import PageComponent from "@/components/page";
//
import ChevronUpDown from "@/icons/chevron-up-down";
import MagnifyingGlass from "@/icons/magnifying-glass";

const ListboxDemo = () => {
  return (
    <Listbox as="div" className="relative">
      <Listbox.Button className="flex items-center justify-between bg-white bg-opacity-5 py-2 px-4">
        Artist
        <ChevronUpDown className="pointer-events-none" />
      </Listbox.Button>
      <Transition>
        <Listbox.Options>
          <Listbox.Option value={"deeznutz"}>Suxk Deez Nuts</Listbox.Option>
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

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
          <div
            className="flex flex-1 items-center justify-between border border-dark-purple bg-white bg-opacity-5 py-2 px-4"
            onClick={() => {
              if (!artistFilter) {
                setArtistFilter(["Bruno Mars"]);
              } else {
                setArtistFilter(undefined);
              }
            }}
          >
            Artist
            <ChevronUpDown />
          </div>
          <div
            className="flex flex-1 items-center justify-between border border-dark-purple bg-white bg-opacity-5 py-2 px-4"
            onClick={() => {
              if (!genreFilter) {
                setGenreFilter([""]);
              } else {
                setGenreFilter(undefined);
              }
            }}
          >
            Genre
            <ChevronUpDown />
          </div>
          <div
            className="flex flex-1 items-center justify-between border border-dark-purple bg-white bg-opacity-5 py-2 px-4"
            onClick={() => {
              if (!decadeFilter) {
                setDecadeFilter(1980);
              } else {
                setDecadeFilter(undefined);
              }
            }}
          >
            Decade
            <ChevronUpDown />
          </div>
        </div>
      </div>
      <div className="mb-4 grid gap-y-2">
        {isLoading ? (
          <div>Loading..</div>
        ) : !songs || songs.length === 0 ? (
          <div>No Content.</div>
        ) : (
          songs.map((song, i) => (
            <div key={i} className="bg-white bg-opacity-5 p-4">
              <p>{song.title}</p>
              <p className="text-sm">{song.artist.name}</p>
              <p className="text-sm text-light">{song.year}</p>
            </div>
          ))
        )}
      </div>
    </PageComponent>
  );
}
