import {create} from 'zustand';
import { Store } from './_components/types'


const useStore = create<Store>((set, get) => ({
    data: [],
    region: '',
    district: '',
    village: '',
    filteredWells: [],
    setData: (data) => set({ data }),
    setRegion: (region) => {
        set({ region });
        get().filterWells();
    },
    setDistrict: (district) => {
        set({ district });
        get().filterWells();
    },
    setVillage: (village) => {
        set({ village });
        get().filterWells();
    },
    filterWells: () => {
        const { data, region, district, village } = get();
        let wells = data.flatMap((region) => region.Well);

        if (region && region !== 'All') {
            const regionData = data.find((r) => r.name === region);
            wells = wells.filter((well) => well.regionId === regionData?.id);
        }

        if (district) {
            const regionData = data.find((r) => r.name === region);
            const districtData = regionData?.District.find((d) => d.name === district);
            wells = wells.filter((well) => well.districtId === districtData?.id);
        }

        if (village) {
            const regionData = data.find((r) => r.name === region);
            const villageData = regionData?.Village.find((v) => v.name === village);
            wells = wells.filter((well) => well.villageId === villageData?.id);
        }

        wells = wells.filter((well) => well !== undefined);
        set({ filteredWells: wells });
    },
}));

export default useStore;
