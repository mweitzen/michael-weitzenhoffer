export interface IAudioTrack {
  title: string;
  artist: string;
  audioSrc: string;
}

interface IAudioPlayer {
  tracks: IAudioTrack[];
}

const AudioPlayer: React.FC<IAudioPlayer> = ({ tracks }) => {
  return (
    <div>
      {/* <button onClick={() => test.play()}>Okay</button> */}
      <audio controls src="everlong.wav" loop />
    </div>
  );
};

export default AudioPlayer;
