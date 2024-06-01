
import { TSideBarItems } from "@/types/types";
import { BadgeCentIcon, Building, CarTaxiFrontIcon, Droplet, Filter, Gauge, LayoutDashboard, Map, School, ShoppingBag, ShoppingCart, University, User, Users } from "lucide-react";

export const SideBarItems: TSideBarItems[] = [
    {
        title: "Dashboard",
        path: "/",
        icon: <LayoutDashboard size={20}/>
    },
    {
        title: "Anaytics",
        path: "/dashboard",
        icon: <Filter size={20}/>,
    },
    {
        title: "Regions",
        path: "/region",
        icon: <Building size={20}/>,
    },
    {
        title: "Districts",
        path: "/district ",
        icon: <School size={20}/>,
    },
    {
        title: "Village",
        path: "/village",
        icon: <University size={20}/>,
    },
    {
        title: "Water sources",
        path: "/water-source",
        icon: <Droplet size={20}/>,
    },
    {
        title: "Map",
        path: "/map",
        icon: <Map size={20}/>,
    },
    {
        title: "Administration",
        path: "/administration",
        icon: <User size={20}/>,
    },
    
   
]