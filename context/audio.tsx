import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  Dispatch,
  SetStateAction,
} from "react";
import { api } from "@/lib/api";
import { Recording } from "@prisma/client";
import { WithChildren } from "@/types";

interface IAudioContext {
  tracks: Recording[];
  trackIndex: number;
  trackTitle: string;
  trackArtist: string;
  trackProgress: number;
  trackIsPlaying: boolean;
  trackMuted: boolean;
  setTracks: Dispatch<SetStateAction<Recording[]>>;
  setTrackTitle: Dispatch<SetStateAction<string>>;
  setTrackArtist: Dispatch<SetStateAction<string>>;
  setTrackIndex: Dispatch<SetStateAction<number>>;
  setTrackProgress: Dispatch<SetStateAction<number>>;
  setTrackIsPlaying: Dispatch<SetStateAction<boolean>>;
  setTrackMuted: Dispatch<SetStateAction<boolean>>;
  toPreviousTrack: () => void;
  toNextTrack: () => void;
}

const initialState: IAudioContext = {
  tracks: [],
  trackIndex: 0,
  trackTitle: "",
  trackArtist: "",
  trackProgress: 0,
  trackIsPlaying: false,
  trackMuted: true,
  setTracks: () => {},
  setTrackTitle: () => {},
  setTrackArtist: () => {},
  setTrackIndex: () => {},
  setTrackProgress: () => {},
  setTrackIsPlaying: () => {},
  setTrackMuted: () => {},
  toPreviousTrack: () => {},
  toNextTrack: () => {},
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

  // useEffect(() => {
  //   if (trackIsPlaying) {
  //     audio.play();
  //   } else {
  //     audio.pause();
  //   }
  // }, [trackIsPlaying]);

  /*
   * HANDLERS
   */
  function toPreviousTrack() {
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
        setTrackTitle,
        setTrackArtist,
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
