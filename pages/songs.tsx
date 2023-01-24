import { useState } from "react";
import { InferGetStaticPropsType } from "next";
//
import prisma from "@/lib/prisma";
import { Song, Artist, Genre } from "@prisma/client";
//
import PageComponent from "@/components/page";
import FilterDropdown from "@/components/dropdown-filter";
//
import MagnifyingGlass from "@/icons/magnifying-glass";
import getChoices from "@/lib/helpers/getChoices";

/*
 *
 * GET STATIC PROPS
 *
 */
type StaticProps = InferGetStaticPropsType<typeof getStaticProps>;

export async function getStaticProps() {
  const songs = await prisma.song.findMany({
    orderBy: {
      artist: {
        name: "asc",
      },
    },
    include: {
      artist: true,
    },
  });

  return {
    props: {
      songs,
    },
  };
}

/*
 *
 * PAGE
 *
 */
export default function AllSongsListPage({ songs }: StaticProps) {
  const [searchText, setSearchText] = useState("");
  const [artistFilter, setArtistFilter] = useState<string[]>([]);
  const [genreFilter, setGenreFilter] = useState<string[]>([]);
  const [decadeFilter, setDecadeFilter] = useState<number[]>([]);

  // const choices = getChoices(songs, "artist.name");
  let filteredSongs = songs;

  if (!!songs) {
    if (artistFilter.length !== 0) {
      filteredSongs = songs.filter((song) =>
        artistFilter.includes(song.artist.name)
      );
    }
    if (genreFilter.length !== 0) {
      filteredSongs = songs.filter(
        (song) => song.genre && genreFilter.includes(song.genre)
      );
    }
    if (decadeFilter.length !== 0) {
      // filteredSongs = songs.filter(
      //   (song) =>
      //     song.year &&
      //     song.year >= decadeFilter &&
      //     song.year <= decadeFilter + 9
      // );
    }

    if (!!searchText) {
      filteredSongs = songs.filter(
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
      {/* SEARCH / FILTERS */}
      <div className="sticky -top-0 mb-8 border border-dark-purple backdrop-blur">
        <div className="relative">
          <MagnifyingGlass className="absolute top-2.5 left-2.5" />
          <input
            type="search"
            placeholder="Search by song or artist"
            className="relative z-10 w-full border border-dark-purple bg-white bg-opacity-5 pl-10 focus:border-dark-purple focus:ring-0 focus:ring-offset-1 focus:ring-offset-purple-900"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="grid w-full grid-cols-3">
          <FilterDropdown
            label="Artist"
            options={[
              { label: "Bruno Mars", value: "Bruno Mars" },
              { label: "Tina Turner", value: "Tina Turner" },
            ]}
            handleChange={setArtistFilter}
          />
          <FilterDropdown
            label="Genre"
            options={[
              { label: "Pop / Rock", value: Genre.POP_ROCK_RB },
              { label: "Musical Theater", value: Genre.MUSICAL_THEATER },
            ]}
            handleChange={setGenreFilter}
          />
          <FilterDropdown
            label="Decade"
            options={[
              { label: "1980s", value: 1980 },
              { label: "1990s", value: 1990 },
            ]}
            handleChange={setDecadeFilter}
          />
        </div>
      </div>

      {/* SONG LISTINGS */}
      <div className="mb-4 grid gap-y-2">
        {filteredSongs.length === 0 ? (
          <SongEmptyState />
        ) : (
          filteredSongs.map((song) => (
            <SongListItem key={song.id} song={song} />
          ))
        )}
      </div>
    </PageComponent>
  );
}

/*
 *
 * COMPONENTS
 *
 */

const SongEmptyState = () => (
  <div className="bg-white bg-opacity-5 p-4">No songs match</div>
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
