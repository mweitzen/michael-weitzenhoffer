import { WithChildren } from "@/types";
//
import { useAudioContext } from "@/context/audio";
//
import PlayIcon from "@/icons/play";
import PauseIcon from "@/icons/pause";
import BackwardIcon from "@/icons/backward";
import ForwardIcon from "@/icons/forward";
import SpeakerMuteIcon from "@/icons/speaker-x-mark";
import SpeakerSoundWaveIcon from "@/icons/speaker-sound-wave";

interface IAudioControl extends WithChildren {
  handleClick: () => any;
  ariaLabel: string;
}

const AudioControl: React.FC<IAudioControl> = ({
  ariaLabel,
  handleClick,
  children,
}) => {
  return (
    <span className="grid w-full place-content-center">
      <button
        type="button"
        aria-label={ariaLabel}
        onClick={handleClick}
        className="rounded-full bg-white bg-opacity-5 p-4"
      >
        {children}
      </button>
    </span>
  );
};

const AudioControls = () => {
  const {
    trackIsPlaying,
    trackMuted,
    toNextTrack,
    toPreviousTrack,
    toggleTrackMuted,
    playTrack,
    pauseTrack,
  } = useAudioContext();

  return (
    <div className="grid w-full grid-cols-4 py-2">
      <AudioControl ariaLabel="Previous" handleClick={toPreviousTrack}>
        <BackwardIcon />
      </AudioControl>
      {trackIsPlaying ? (
        <AudioControl handleClick={pauseTrack} ariaLabel="Pause">
          <PauseIcon />
        </AudioControl>
      ) : (
        <AudioControl handleClick={playTrack} ariaLabel="Play">
          <PlayIcon />
        </AudioControl>
      )}
      {trackMuted ? (
        <AudioControl handleClick={toggleTrackMuted} ariaLabel="Un-Mute">
          <SpeakerMuteIcon />
        </AudioControl>
      ) : (
        <AudioControl handleClick={toggleTrackMuted} ariaLabel="Mute">
          <SpeakerSoundWaveIcon />
        </AudioControl>
      )}
      <AudioControl ariaLabel="Next" handleClick={toNextTrack}>
        <ForwardIcon />
      </AudioControl>
    </div>
  );
};

export default AudioControls;
