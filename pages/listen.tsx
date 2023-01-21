import { IAudioTrack } from "@/types/audio";
//
import PageComponent from "@/components/page";
import AudioPlayer from "@/components/audio-player";

const tracks: IAudioTrack[] = [
  {
    title: "Everlong",
    artist: "Foo Fighters",
    audioSrc: "everlong.wav",
  },
  {
    title: "Another Brick in the Wall",
    artist: "Pink Floyd",
    audioSrc: "everlong.wav",
  },
  {
    title: "What's Love Got to Do With It",
    artist: "Tina Turner",
    audioSrc: "everlong.wav",
  },
];

export default function RecordingsPage() {
  return (
    <PageComponent header="Listen to Michael" seoTitle="Listen">
      <AudioPlayer tracks={tracks} />
    </PageComponent>
  );
}
