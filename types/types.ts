export type TSideBarItems = {
    title: string
    path: string
    icon?: JSX.Element
    // subMenu?: boolean
    subMenuItems?: TSideBarItems[]
}

export interface WaterResource {
    id: string;
    name: string
    w_status: string
    water_total: number
}

// Define the types for the chart options and series
export interface ChartOptions {
    chart: {
        id: string;
    };
    legend: {
        position: string;
    };
    xaxis: {
        categories: string[];
        title: {
            text: string;
        };
    };
    yaxis: {
        title: {
            text: string;
        };
    };
    title: {
        text: string;
    };
}

export interface ChartSeries {
    name: string;
    data: number[];
}

// Define the state type
export interface ChartData {
    options: ChartOptions;
    series: ChartSeries[];
}