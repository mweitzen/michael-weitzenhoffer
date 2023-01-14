import { createContext, useContext, useState, useEffect, useRef } from "react";

interface IAudioContext {}

const initialState: IAudioContext = {};

const AudioContext = createContext<IAudioContext>(initialState);

const AudioContextProvider = () => {
  return (
    <AudioContext.Provider value={{}}>
      AudioContextProvider
    </AudioContext.Provider>
  );
};

export default AudioContextProvider;

export const useAudioContext = useContext(AudioContext);
