export type Well = {
  id: number;
  name: string;
  regionId: number;
  districtId: number;
  villageId: number;
  type: string;
  status: string;
  average_ph?: number;
  average_conductivity?: number;
  average_price?: number;
};

export type District = {
  id: number;
  name: string;
};

export type Village = {
  id: number;
  name: string;
};

export type Region = {
  id: number;
  name: string;
  District: District[];
  Village: Village[];
  Well: Well[];
};

// export type Store = {
//   data: Region[];
//   region: string;
//   district: string;
//   village: string;
//   filteredWells: Well[];
//   setData: (data: Region[]) => void;
//   setRegion: (region: string) => void;
//   setDistrict: (district: string) => void;
//   setVillage: (village: string) => void;
//   filterWells: () => void;
// };

export type Store = {
  data: Region[];
  region: string;
  district: string;
  village: string;
  filteredWells: Well[];
  wellStatusCounts: {
    planned: number;
    completed: number;
    functional: number;
    nonFunctional: number;
  };
  setData: (data: Region[]) => void;
  setRegion: (region: string) => void;
  setDistrict: (district: string) => void;
  setVillage: (village: string) => void;
  filterWells: () => void;
  calculateWellStatusCounts: () => void;
};