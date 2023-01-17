import AudioPlayer, { IAudioTrack } from "@/components/audio-player";
import PageComponent from "@/components/page";

const tracks: IAudioTrack[] = [
  {
    title: "Everlong",
    artist: "Foo Fighters",
    audioSrc: "everlong.wav",
  },
];

export default function RecordingsPage() {
  return (
    <PageComponent header="Listen to Michael" seoTitle="Listen">
      <div className="text-center">Coming Soon</div>
    </PageComponent>
  );
}
