import { useAudioContext } from "@/context/audio";
//
import PageComponent from "@/components/page";
import AudioControls from "@/components/audio-controls";
//
import SpeakerSoundWaveIcon from "@/icons/speaker-sound-wave";
import SpeakerMuteIcon from "@/icons/speaker-x-mark";
import { Recording } from "@prisma/client";

const RecordingsLoadingState = () => (
  <div className="bg-white bg-opacity-5 p-4">Loading...</div>
);

const RecordingsEmptyState = () => (
  <div className="bg-white bg-opacity-5 p-4">No songs match.</div>
);

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

export default function RecordingsPage() {
  const { tracks, tracksLoading, trackIndex, trackIsPlaying, trackMuted } =
    useAudioContext();

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
          {tracksLoading ? (
            <RecordingsLoadingState />
          ) : (
            tracks.map((track, i) => {
              return <RecordingItem key={i} track={track} index={i} />;
            })
          )}
        </div>
      </section>
    </PageComponent>
  );
}
