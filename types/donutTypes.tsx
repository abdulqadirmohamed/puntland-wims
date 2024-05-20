// Define the type for the API response
export interface WaterResource {
    id: string;
    water_total: number;
  }
  
  // Define the types for the chart options
  export interface ChartOptions {
    chart: {
      id: string;
    };
    labels: string[];
    legend: {
      position: string;
    };
    title: {
      text: string;
    };
  }
  
  // Define the state type
  export interface ChartData {
    options: ChartOptions;
    series: number[];
  }