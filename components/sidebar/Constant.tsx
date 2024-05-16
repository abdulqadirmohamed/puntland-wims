
import { TSideBarItems } from "@/types/types";
import { BadgeCentIcon, Building, CarTaxiFrontIcon, Droplet, Gauge, LayoutDashboard, Map, School, ShoppingBag, ShoppingCart, University, User, Users } from "lucide-react";

export const SideBarItems: TSideBarItems[] = [
    {
        title: "Dashboard",
        path: "/",
        icon: <LayoutDashboard />
    },
    {
        title: "Regions",
        path: "/region",
        icon: <Building />,
    },
    {
        title: "Districts",
        path: "/district ",
        icon: <School />,
    },
    {
        title: "Village",
        path: "/village",
        icon: <University />,
    },
    {
        title: "Water sources",
        path: "/water-sources",
        icon: <Droplet />,
    },
    {
        title: "Map",
        path: "/map",
        icon: <Map />,
    },
    {
        title: "Administration",
        path: "/administration",
        icon: <User />,
    },
    
   
]