
import BoreholeTopParameters from "@/components/analytics/BoreholeTopParameters";
import MinMaxDisSolvedSolids from "@/components/analytics/MinMaxDisSolvedSolids";
import MinMaxforPH from "@/components/analytics/minMaxPH/MinMaxforPH";
import RegionalAverages from "@/components/analytics/RegionalAverages";
import Summery from "@/components/analytics/Summery";
import VillageWaterSourceStatus from "@/components/analytics/VillageWaterSourceStatus/VillageWaterSourceStatus";
import WaterSourcesRegions from "@/components/analytics/waterSourcesRegions/WaterSourcesRegions";
import WaterSourcesTimeline from "@/components/analytics/plannedWater/WaterSourcesTimeline";
import StatusPage from "@/components/analytics/donutchart/StatusDonutChart";




export default function  Home() {
  return (
    <main>
      <Summery />
      <div className="grid lg:grid-cols-2 gap-6 my-4">
        <StatusPage/>
        <WaterSourcesTimeline />
      </div>
      <div className="grid md:grid-cols-3 gap-6 my-4">
        <RegionalAverages />
        <WaterSourcesRegions />
        <BoreholeTopParameters />
      </div>
      <div className="grid md:grid-cols-3 gap-6 my-4">
        <VillageWaterSourceStatus />
        <MinMaxforPH />
        <MinMaxDisSolvedSolids />
      </div>
    </main>
  );
}
