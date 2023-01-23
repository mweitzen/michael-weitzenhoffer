import { useEffect } from "react";
import { InferGetStaticPropsType } from "next";
//
import prisma from "@/lib/prisma";
import { useAudioContext } from "@/context/audio";
import { Recording } from "@prisma/client";
//
import PageComponent from "@/components/page";
import AudioControls from "@/components/audio-controls";
//
import SpeakerSoundWaveIcon from "@/icons/speaker-sound-wave";
import SpeakerMuteIcon from "@/icons/speaker-x-mark";
import MusicNoteIcon from "@/icons/music-note";

const RecordingItem = ({
  track,
  index: i,
}: {
  track: Recording;
  index: number;
}) => {
  const { trackIndex, trackIsPlaying, trackMuted, loadTrack } =
    useAudioContext();

  return (
    <button
      className="flex w-full items-center justify-between bg-white bg-opacity-5 p-4 text-left"
      onClick={() => {
        if (trackIndex !== i) {
          loadTrack(i);
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
  }, [tracks, setTracks]);

  const playbackText = !trackIsPlaying
    ? `Press Play to listen to:`
    : trackMuted
    ? `Un-mute to listen to:`
    : `Listening to:`;

  return (
    <PageComponent header="Listen to Michael" seoTitle="Listen">
      <section className="flex w-full flex-col gap-2">
        {tracks.length !== 0 ? (
          <div className="flex items-center gap-4">
            <MusicNoteIcon className={trackIsPlaying ? "animate-pulse" : ""} />
            <div className="space-y-1">
              <p>{playbackText}</p>
              <p className="text-lg"> {tracks[trackIndex].recordingTitle}</p>
            </div>
          </div>
        ) : null}
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
