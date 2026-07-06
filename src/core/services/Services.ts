import { ServiceLocator } from "./ServiceLocator";
import { FlightPlan } from "../../domain/flightplan";

export const Services = new ServiceLocator();

Services.register("flightplan", new FlightPlan());