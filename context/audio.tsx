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
import { Recording } from "@prisma/client";

interface IAudioContext {
  tracks: Recording[];
  trackIndex: number;
  trackTitle: string;
  trackArtist: string;
  trackProgress: number;
  trackIsPlaying: boolean;
  trackMuted: boolean;
  setTracks: Dispatch<SetStateAction<Recording[]>>;
  setTrackIndex: Dispatch<SetStateAction<number>>;
  toggleTrackMuted: () => void;
  toPreviousTrack: () => void;
  toNextTrack: () => void;
  playTrack: () => void;
  pauseTrack: () => void;
}

const initialState: IAudioContext = {
  tracks: [],
  trackIndex: 0,
  trackTitle: "",
  trackArtist: "",
  trackProgress: 0,
  trackIsPlaying: false,
  trackMuted: false,
  setTracks: () => {},
  setTrackIndex: () => {},
  toggleTrackMuted: () => {},
  toPreviousTrack: () => {},
  toNextTrack: () => {},
  playTrack: () => {},
  pauseTrack: () => {},
};

const AudioContext = createContext<IAudioContext>(initialState);

const AudioContextProvider: React.FC<WithChildren> = ({ children }) => {
  /*
   * STATE
   */
  const [tracks, setTracks] = useState(initialState.tracks);
  const [trackIndex, setTrackIndex] = useState(initialState.trackIndex);
  const [trackTitle, setTrackTitle] = useState(initialState.trackTitle);
  const [trackArtist, setTrackArtist] = useState(initialState.trackArtist);
  const [trackProgress, setTrackProgress] = useState(
    initialState.trackProgress
  );
  const [trackIsPlaying, setTrackIsPlaying] = useState(
    initialState.trackIsPlaying
  );
  const [trackMuted, setTrackMuted] = useState(initialState.trackMuted);

  /*
   * REFS
   */
  const trackRef = useRef<HTMLAudioElement>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      trackRef.current = new Audio(
        "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--everlong.wav?t=2023-01-23T03%3A38%3A19.970Z"
      );
    }
  }, []);

  /*
   * HANDLERS
   */

  function playTrack() {
    if (!!trackRef.current) {
      setTrackIsPlaying(true);
      trackRef.current.play();
    }
  }

  function pauseTrack() {
    if (!!trackRef.current) {
      setTrackIsPlaying(false);
      trackRef.current.pause();
    }
  }

  function stopTrack() {
    if (!!trackRef.current) {
      setTrackIsPlaying(false);
      trackRef.current.pause();
      trackRef.current.currentTime = 0;
    }
  }

  function toggleTrackMuted() {
    if (!!trackRef.current) {
      if (trackMuted) {
        trackRef.current.volume = 1;
      } else {
        trackRef.current.volume = 0;
      }
      setTrackMuted((prevState) => !prevState);
    }
  }

  function toPreviousTrack() {
    // tracks[trackIndex]
    setTrackIndex((prevState) => {
      if (!!tracks) {
        // One press of back button goes to start of song
        if (trackProgress > 3) {
          return prevState;
        }
        // automatically loop the player around
        if (prevState === 0) {
          return tracks.length - 1;
        }
        // return previous track
        return prevState - 1;
      }
      return prevState;
    });
  }

  function toNextTrack() {
    setTrackIndex((prevState) => {
      if (!!tracks) {
        // automatically loop the player when playing last song
        if (prevState === tracks.length - 1) {
          return 0;
        }
        // return next track track
        return prevState + 1;
      }
      return prevState;
    });
  }

  return (
    <AudioContext.Provider
      value={{
        tracks,
        trackIndex,
        trackTitle,
        trackArtist,
        trackProgress,
        trackIsPlaying,
        trackMuted,
        setTracks,
        setTrackIndex,
        toggleTrackMuted,
        toPreviousTrack,
        toNextTrack,
        playTrack,
        pauseTrack,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContextProvider;

export const useAudioContext = () => useContext(AudioContext);
