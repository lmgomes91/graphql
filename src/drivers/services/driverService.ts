import ICreateDriverDTO from "../dtos/ICreateDriverDTO";
import { IFindDriverDTO } from "../dtos/IFindDriverDTO";
import IUpdateDriver from "../dtos/IUpdateDriverDTO";
import { Driver } from "../entities/Drivers";
import { DriverRepository } from "../respositories/DriverRepository";

export const createDriver = async (body: any): Promise<Driver | Error> => {
  try {
    const name = body["name"];
    const age = body["age"];

    if (!name || !age) {
      return new Error("Missing resources");
    }

    const driverRepository = new DriverRepository();

    const driver: Driver = await driverRepository.create({ name, age });

    if (!driver) {
      return new Error("Failed to create driver");
    }

    return driver;
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

export const retrieveDriversByAttribute = async (
  body: any
): Promise<Driver[] | Error> => {
  try {
    const attr = body["attr"];
    const value = body["value"];

    if (!attr || !value) {
      return new Error("Missing resources");
    }

    const driverRepository = new DriverRepository();

    const drivers: Driver[] = await driverRepository.retriveByAttribute({
      attr,
      value,
    });

    return drivers;
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

export const retrieveDriverById = async (
  body: any
): Promise<Driver | Error> => {
  try {
    const id = body["id"];

    if (!id) {
      return new Error("Missing resources");
    }

    const driverRepository = new DriverRepository();

    const driver: Driver = await driverRepository.retriveById(id);

    return driver;
  } catch (error) {
    console.log(error);
    return new Error(error);
  }
};

export const updateDriverById = async (body: any): Promise<Driver | Error> => {
  try {
    if (!body["id"]) {
      return new Error("Missing Resources");
    }

    const updateData: IUpdateDriver = {
      id: body["id"],
      age: body["age"] ? body["age"] : undefined,
      name: body["name"] ? body["name"] : undefined,
    };

    const driverRepository = new DriverRepository();

    const updatedDriver = await driverRepository.updateById(updateData);

    return updatedDriver;
  } catch (error) {
    return new Error(error);
  }
};
