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
  const { data: songs, isLoading } = api.songs.getAll.useQuery();

  return (
    <PageComponent header="Michael's Repertoire" seoTitle="Repertoire">
      <div className="sticky -top-0 border-0 backdrop-blur">
        <div className="relative mb-1 border border-black">
          <MagnifyingGlass className="absolute top-2.5 left-2.5" />
          <input
            type="search"
            placeholder="Search by song or artist"
            className="w-full border-0 bg-white bg-opacity-5 pl-10"
          />
        </div>
        <div className="mb-8 flex w-full gap-x-1">
          <div className="flex flex-1 items-center justify-between bg-white bg-opacity-5 py-2 px-4">
            Artist
            <ChevronUpDown />
          </div>
          <div className="flex flex-1 items-center justify-between bg-white bg-opacity-5 py-2 px-4">
            Genre
            <ChevronUpDown />
          </div>
          <div className="flex flex-1 items-center justify-between bg-white bg-opacity-5 py-2 px-4">
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
              <p className="text-sm text-light">{song.year || "-"}</p>
            </div>
          ))
        )}
      </div>
    </PageComponent>
  );
}
