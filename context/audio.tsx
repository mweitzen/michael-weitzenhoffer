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
  loadTrack: (newTrackIndex: number) => void;
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
  loadTrack: () => {},
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
      if (tracks.length !== 0) {
        trackRef.current = new Audio(tracks[0].storageUrl);
      }
    }
  }, [tracks]);

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

  // function stopTrack() {
  //   if (!!trackRef.current) {
  //     setTrackIsPlaying(false);
  //     trackRef.current.pause();
  //     trackRef.current.currentTime = 0;
  //   }
  // }

  function toggleTrackMuted() {
    if (!!trackRef.current) {
      if (trackMuted) {
        trackRef.current.muted = false;
      } else {
        trackRef.current.muted = true;
      }
      setTrackMuted((prevState) => !prevState);
    }
  }

  function loadTrack(newTrackIndex: number) {
    if (!!trackRef.current) {
      const wasPlaying = trackIsPlaying;
      pauseTrack();
      const newTrackUrl = tracks[newTrackIndex].storageUrl;
      trackRef.current.src = newTrackUrl;
      setTrackIndex(newTrackIndex);
      if (wasPlaying) {
        playTrack();
      }
    }
  }

  function toPreviousTrack() {
    // automatically loop the player around
    const previousTrackIndex =
      trackIndex === 0 ? tracks.length - 1 : trackIndex - 1;

    loadTrack(previousTrackIndex);
  }

  function toNextTrack() {
    // automatically loop the player around
    const nextTrackIndex =
      trackIndex === tracks.length - 1 ? 0 : trackIndex + 1;

    loadTrack(nextTrackIndex);
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
        toggleTrackMuted,
        toPreviousTrack,
        toNextTrack,
        loadTrack,
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
