import { Repository, getRepository } from "typeorm";
import { ICreateRide } from "../dtos/ICreateRideDTO";
import { IFindRide } from "../dtos/IFindRideDTO";
import { IUpdateRide } from "../dtos/IUpdateRideDTO";
import { Ride } from "../entities/Rides";

export class RideRespository {
  private ormRepository: Repository<Ride>;
  constructor() {
    this.ormRepository = getRepository(Ride);
  }

  public async create({
    from,
    id_driver,
    to,
    value,
  }: ICreateRide): Promise<Ride> {
    const ride = this.ormRepository.create({ from, id_driver, to, value });
    return await this.ormRepository.save(ride);
  }

  public async retriveByAttribute({ attr, value }: IFindRide): Promise<Ride[]> {
    const query: { [x: string]: any } = {};
    query[attr] = value;

    const ride = await this.ormRepository.find({
      where: query,
    });

    return ride;
  }

  public async retriveById(id: number): Promise<Ride> {
    const [ride] = await this.ormRepository.find({
      where: {
        id,
      },
    });

    return ride;
  }

  public async update(iUpdate: IUpdateRide): Promise<Ride> {
    const [ride] = await this.ormRepository.find({
      where: {
        id: iUpdate.id,
      },
    });

    ride.from = iUpdate.from ? iUpdate.from : ride.from;
    ride.id_driver = iUpdate.id_driver ? iUpdate.id_driver : ride.id_driver;
    ride.to = iUpdate.to ? iUpdate.to : ride.to;
    ride.value = iUpdate.value ? iUpdate.value : ride.value;

    return await this.ormRepository.save(ride);
  }
}
