import { IAudioTrack } from "@/types/audio";
import { useAudioContext } from "@/context/audio";
import AudioControls from "./audio-controls";
import SpeakerSoundWaveIcon from "@/icons/speaker-sound-wave";
import SpeakerMuteIcon from "@/icons/speaker-x-mark";

interface IAudioPlayer {
  tracks: IAudioTrack[];
}

const AudioPlayer: React.FC<IAudioPlayer> = ({ tracks }) => {
  const { trackIndex, trackIsPlaying, trackMuted, setTrackIndex } =
    useAudioContext();

  return (
    <section className="flex w-full flex-col">
      <div className="text-center">
        <p>Listening To: {tracks[trackIndex].title}</p>
      </div>
      <AudioControls />
      <div className="space-y-2">
        {tracks.map((track, i) => {
          return (
            <button
              key={i}
              className="flex w-full items-center justify-between bg-white bg-opacity-5 p-4 text-left"
              onClick={() => {
                if (trackIndex !== i) {
                  setTrackIndex(i);
                }
              }}
            >
              <span>
                <p className="text-lg">{track.title}</p>
                <p>{track.artist}</p>
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
        })}
      </div>
    </section>
  );
};

export default AudioPlayer;
