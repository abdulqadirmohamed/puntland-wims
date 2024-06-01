import {create} from 'zustand';
import { Store } from './_components/types'


const useStore = create<Store>((set, get) => ({
    data: [],
    region: '',
    district: '',
    village: '',
    filteredWells: [],
    wellStatusCounts: {
        planned: 0,
        completed: 0,
        functional: 0,
        nonFunctional: 0,
      },

    setData: (data) => set({ data }),
    setRegion: (region) => {
        set({ region });
        get().filterWells();
        get().calculateWellStatusCounts();
    },
    setDistrict: (district) => {
        set({ district });
        get().filterWells();
        get().calculateWellStatusCounts();
    },
    setVillage: (village) => {
        set({ village });
        get().filterWells();
        get().calculateWellStatusCounts();
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

    calculateWellStatusCounts: () => {
        const { filteredWells } = get();
        const counts = filteredWells.reduce(
          (acc, well) => {
            switch (well.status) {
              case 'Planned':
                acc.planned += 1;
                break;
              case 'completed':
                acc.completed += 1;
                break;
              case 'Functional':
                acc.functional += 1;
                break;
              case 'Non-Functional':
                acc.nonFunctional += 1;
                break;
            }
            return acc;
          },
          { planned: 0, completed: 0, functional: 0, nonFunctional: 0 }
        );
        set({ wellStatusCounts: counts });
      },

}));

export default useStore;
