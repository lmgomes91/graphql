import { Driver } from "../entities/Drivers";
import { getRepository, Repository } from "typeorm";
import ICreateDriverDTO from "../dtos/ICreateDriverDTO";
import { IFindDriverDTO } from "../dtos/IFindDriverDTO";
import IUpdateDriver from "../dtos/IUpdateDriverDTO";

export class DriverRepository {
  private ormRepository: Repository<Driver>;
  constructor() {
    this.ormRepository = getRepository(Driver);
  }

  public async create({ age, name }: ICreateDriverDTO): Promise<Driver> {
    const driver = this.ormRepository.create({ age, name });
    return await this.ormRepository.save(driver);
  }

  public async retriveByAttribute({
    attr,
    value,
  }: IFindDriverDTO): Promise<Driver[]> {
    const query: { [x: string]: any } = {};
    query[attr] = value;

    const drivers = await this.ormRepository.find({
      where: query,
    });

    return drivers;
  }

  public async retriveById(id: number): Promise<Driver> {
    const [drivers] = await this.ormRepository.find({
      where: {
        id,
      },
    });

    return drivers;
  }

  public async updateById(iUpdate: IUpdateDriver): Promise<Driver> {
    const [driver] = await this.ormRepository.find({
      where: {
        id: iUpdate.id,
      },
    });

    if (!driver) {
      return driver;
    }

    driver.age = iUpdate.age ? iUpdate.age : driver.age;
    driver.name = iUpdate.name ? iUpdate.name : driver.name;

    return await this.ormRepository.save(driver);
  }
}
