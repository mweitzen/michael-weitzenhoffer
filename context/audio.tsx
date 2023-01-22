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
  tracksLoading: boolean;
  tracksLoaded: boolean;
  trackIndex: number;
  trackTitle: string;
  trackArtist: string;
  trackProgress: number;
  trackIsPlaying: boolean;
  trackMuted: boolean;
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
  tracksLoading: false,
  tracksLoaded: false,
  trackIndex: 0,
  trackTitle: "",
  trackArtist: "",
  trackProgress: 0,
  trackIsPlaying: false,
  trackMuted: true,
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
  const [currentTrackRef, setCurrentTrackRef] = useState<HTMLAudioElement>();
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

  const {
    data: tracks,
    isLoading: tracksLoading,
    isSuccess: tracksLoaded,
  } = api.recordings.getAll.useQuery();

  /*
   * REFS
   */
  // const audioRef = useRef(new Audio("everlong.wav"));
  // let audio: HTMLAudioElement;
  // if (typeof window !== "undefined") {
  //   audio = new Audio(
  //     "https://swxahweiafzsiimikvbg.supabase.co/storage/v1/object/public/audio/sample--as-it-was.wav"
  //   );
  // }

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     if (!!tracks) {
  //       if (!tracksLoading) {
  //         const audioRef = new Audio(tracks[trackIndex].storageUrl);
  //         setCurrentTrackRef(audioRef);
  //       }
  //     }
  //   }
  // }, [tracks, tracksLoading, trackIndex]);

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
        tracks: tracks || [],
        tracksLoading,
        tracksLoaded,
        trackIndex,
        trackTitle,
        trackArtist,
        trackProgress,
        trackIsPlaying,
        trackMuted,
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
