import AudioPlayer, { IAudioTrack } from "@/components/audio-player";

const tracks: IAudioTrack[] = [
  {
    title: "Everlong",
    artist: "Foo Fighters",
    audioSrc: "everlong.wav",
  },
];

export default function RecordingsPage() {
  return (
    <div className="grid gap-8">
      <h1>Listen to Michael</h1>
      {/* <AudioPlayer tracks={tracks} /> */}
    </div>
  );
}
