import { Service, FilterTab } from '../types/service';
import servicesJson from './services.json';

export const servicesData: Service[] = servicesJson as Service[];

export const filterTabs: FilterTab[] = [
  { label: "All Services", value: "all", count: servicesData.length },
  { label: "Engine & Mechanical", value: "engine-mechanical", count: servicesData.filter(s => s.category === "engine-mechanical").length },
  { label: "Tires & Wheels", value: "tires-wheels", count: servicesData.filter(s => s.category === "tires-wheels").length },
  { label: "Body & Denting", value: "body-denting", count: servicesData.filter(s => s.category === "body-denting").length },
  { label: "Electrical", value: "electrical", count: servicesData.filter(s => s.category === "electrical").length },
  { label: "Detailing & Coating", value: "detailing-coating", count: servicesData.filter(s => s.category === "detailing-coating").length },
  { label: "Glass & Windshield", value: "glass-windshield", count: servicesData.filter(s => s.category === "glass-windshield").length },
];
