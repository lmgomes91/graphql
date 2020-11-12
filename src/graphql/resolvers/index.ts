import {
  createDriver,
  retrieveDriversByAttribute,
  retrieveDriverById,
  updateDriverById,
} from "../../drivers/services/driverService";
import {
  createRide,
  retrieveRideById,
  retrieveRidesByAttribute,
  updateRide,
} from "../../rides/services/rideService";

export const resolvers = {
  Query: {
    // Driver Queries
    retrieveDriversByAttribute: async (_: any, body: any) =>
      await retrieveDriversByAttribute(body),
    retrieveDriverById: async (_: any, body: any) =>
      await retrieveDriverById(body),

    // Ride Queries
    retrieveRidesByAttribute: async (_: any, body: any) =>
      await retrieveRidesByAttribute(body),
    retrieveRideById: async (_: any, body: any) => await retrieveRideById(body),
  },

  Mutation: {
    // Driver Mutations
    createDriver: async (_a: any, body: any) => await createDriver(body),
    updateDriver: async (_a: any, body: any) => await updateDriverById(body),

    // Ride Mutations
    createRide: async (_a: any, body: any) => await createRide(body),
    updateRide: async (_a: any, body: any) => await updateRide(body),
  },
};
