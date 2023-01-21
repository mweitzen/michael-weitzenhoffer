import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";

import { WithChildren } from "@/types";

interface IAudioContext {
  trackIndex: number;
  trackProgress: number;
  trackIsPlaying: boolean;
  trackMuted: boolean;
  setTrackIndex: Dispatch<SetStateAction<number>>;
  setTrackProgress: Dispatch<SetStateAction<number>>;
  setTrackIsPlaying: Dispatch<SetStateAction<boolean>>;
  setTrackMuted: Dispatch<SetStateAction<boolean>>;
  toPreviousTrack: () => void;
  toNextTrack: () => void;
}

const initialState: IAudioContext = {
  trackIndex: 0,
  trackProgress: 0,
  trackIsPlaying: false,
  trackMuted: true,
  setTrackIndex: () => {},
  setTrackProgress: () => {},
  setTrackIsPlaying: () => {},
  setTrackMuted: () => {},
  toPreviousTrack: () => {},
  toNextTrack: () => {},
};

const AudioContext = createContext<IAudioContext>(initialState);

const AudioContextProvider: React.FC<WithChildren> = ({ children }) => {
  const [trackIndex, setTrackIndex] = useState(initialState.trackIndex);
  const [trackProgress, setTrackProgress] = useState(
    initialState.trackProgress
  );
  const [trackIsPlaying, setTrackIsPlaying] = useState(
    initialState.trackIsPlaying
  );
  const [trackMuted, setTrackMuted] = useState(initialState.trackMuted);

  function toPreviousTrack() {
    setTrackIndex((prevState) => {
      // One press of back button goes to start of song
      if (trackProgress > 3) {
        return prevState;
      }
      // Can't go backwards beyond array limit
      if (prevState === 0) {
        return 0;
      }
      // return previous track
      return prevState - 1;
    });
  }

  function toNextTrack() {
    const trackList = [1, 2, 3];

    setTrackIndex((prevState) => {
      // automatically loop the player when playing last song
      if (prevState === trackList.length - 1) {
        return 0;
      }
      // return next track track
      return prevState + 1;
    });
  }

  return (
    <AudioContext.Provider
      value={{
        trackIndex,
        trackProgress,
        trackIsPlaying,
        trackMuted,
        setTrackIndex,
        setTrackProgress,
        setTrackIsPlaying,
        setTrackMuted,
        toPreviousTrack,
        toNextTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContextProvider;

export const useAudioContext = () => useContext(AudioContext);
