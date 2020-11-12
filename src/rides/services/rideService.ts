import { ICreateRide } from "../dtos/ICreateRideDTO";
import { IUpdateRide } from "../dtos/IUpdateRideDTO";
import { Ride } from "../entities/Rides";
import { RideRespository } from "../repositories/RideRepository";

export const createRide = async (body: any): Promise<Ride | Error> => {
  try {
    const { id_driver, from, to, value } = body;

    if (!id_driver || !from || !to || !value) {
      return new Error("Missing resources");
    }

    const rideRepository = new RideRespository();

    const ride: Ride = await rideRepository.create({
      from,
      id_driver,
      to,
      value,
    });

    if (!ride) {
      return new Error("Faield to create ride");
    }

    return ride;
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

export const retrieveRidesByAttribute = async (
  body: any
): Promise<Ride[] | Error> => {
  try {
    const attr = body["attr"];
    let value = body["value"];

    if (!attr || !value) {
      return new Error("Missing resources");
    }

    if (attr === "value") {
      value = parseInt(value);
    }

    const rideRepository = new RideRespository();

    const rides: Ride[] = await rideRepository.retriveByAttribute({
      attr,
      value,
    });

    return rides;
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

export const retrieveRideById = async (body: any): Promise<Ride | Error> => {
  try {
    if (!body["id"]) {
      return new Error("Missing reources");
    }

    const rideRepository = new RideRespository();

    const ride = await rideRepository.retriveById(body["id"]);

    return ride;
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

export const updateRide = async (body: any): Promise<Ride | Error> => {
  try {
    if (!body["id"]) {
      return new Error("Missing reources");
    }

    const updateData: IUpdateRide = {
      id: body["id"],
      from: body["from"],
      to: body["to"],
      id_driver: body["id_driver"],
      value: body["value"],
    };

    const rideRepository = new RideRespository();

    return rideRepository.update(updateData);
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};
