import Summery from "@/components/analytics/Summery";
import WaterSourceStatus from "@/components/analytics/WaterSourceStatus";
import WaterSourcesTimeline from "@/components/analytics/WaterSourcesTimeline";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Summery/>
      <div className="grid grid-cols-2 gap-6 my-4">
        <WaterSourceStatus/>
        <WaterSourcesTimeline/>
      </div>
    </main>
  );
}
