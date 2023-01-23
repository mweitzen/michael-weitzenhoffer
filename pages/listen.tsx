import { InferGetStaticPropsType } from "next";
//
import { useAudioContext } from "@/context/audio";
import { Recording } from "@prisma/client";
//
import PageComponent from "@/components/page";
import AudioControls from "@/components/audio-controls";
//
import SpeakerSoundWaveIcon from "@/icons/speaker-sound-wave";
import SpeakerMuteIcon from "@/icons/speaker-x-mark";
import prisma from "@/lib/prisma";
import { useEffect } from "react";

const RecordingItem = ({
  track,
  index: i,
}: {
  track: Recording;
  index: number;
}) => {
  const { trackIndex, trackIsPlaying, trackMuted, setTrackIndex } =
    useAudioContext();

  return (
    <button
      className="flex w-full items-center justify-between bg-white bg-opacity-5 p-4 text-left"
      onClick={() => {
        if (trackIndex !== i) {
          setTrackIndex(i);
        }
      }}
    >
      <span>
        <p className="text-lg">{track.recordingTitle}</p>
        <p>{track.recordingArtist}</p>
      </span>
      {i === trackIndex ? (
        <span>
          {trackMuted || !trackIsPlaying ? (
            <SpeakerMuteIcon />
          ) : (
            <SpeakerSoundWaveIcon />
          )}
        </span>
      ) : null}
    </button>
  );
};

export default function RecordingsPage({
  tracks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { trackIndex, trackIsPlaying, trackMuted, setTracks } =
    useAudioContext();

  useEffect(() => {
    setTracks(tracks);
  }, []);

  const playbackText = !trackIsPlaying
    ? `Press Play to listen to:`
    : trackMuted
    ? `Un-mute to listen to:`
    : `Listening to:`;

  return (
    <PageComponent header="Listen to Michael" seoTitle="Listen">
      <section className="flex w-full flex-col">
        {tracks.length === 0 ? (
          <>No tracks.</>
        ) : (
          <div className="py-2 text-center">
            <p>{playbackText}</p>
            <p className="text-lg"> {tracks[trackIndex].recordingTitle}</p>
          </div>
        )}
        <AudioControls />
        <div className="space-y-2">
          {tracks.map((track, i) => {
            return <RecordingItem key={i} track={track} index={i} />;
          })}
        </div>
      </section>
    </PageComponent>
  );
}

export async function getStaticProps() {
  const tracks = await prisma.recording.findMany();

  return {
    props: {
      tracks,
    },
  };
}
