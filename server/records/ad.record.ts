import {AdEntity, AdNewEntity, SimpleAdEntity} from "../types";
import {ValidationError} from "../utils/errors/errors";
import {pool} from "../utils/database/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from 'uuid'


type AdRecordResults = [AdEntity[], FieldPacket[]]

export class AdRecord implements AdEntity {
    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public url: string;
    public lat: number;
    public lon: number;

    constructor(obj: AdNewEntity) {

        if (!obj.name || obj.name.length > 100) {
            throw new ValidationError('Nazwa ogłoszenia musi zawierać pomiędzy 1 a 100 znaków.')
        }

        if (!obj.description || obj.description.length > 1000) {
            throw new ValidationError('Opis ogłoszenia musi zawierać pomiędzy 1 a 1000 znaków.')
        }

        if (obj.price < 0 || obj.price > 9999999) {
            throw new ValidationError('Cena produktu musi być większa od 0 i mniejsza od 9999999.')
        }

        //    @TODO: check if url is valid

        if (!obj.url || obj.url.length > 100) {
            throw new ValidationError('Link ogłoszenia musi mieć długość od 1 do 100 znaków.')
        }

        if (typeof obj.lat !== 'number' || typeof obj.lon !== 'number') {
            throw new ValidationError('Nie można zlokalizować ogłoszenia.')
        }
        this.id = obj.id
        this.name = obj.name
        this.description = obj.description
        this.price = obj.price
        this.lat = obj.lat
        this.lon = obj.lon
        this.url = obj.url
    }

    static async getOne(id: string): Promise<AdRecord | null> {
        const [results] = await pool.execute("SELECT * FROM `ads` WHERE id = :id", {
            id
        }) as AdRecordResults
        return results.length === 0 ? null : new AdRecord(results[0])
    }

    static async findAll(name: string): Promise<SimpleAdEntity[]> {
        const [results] = await pool.execute("SELECT * FROM `ads` WHERE `name` LIKE :search", {
            search: `%${name}%`
        }) as AdRecordResults;
        return results.map(result => {
            const {
                id, lat, lon
            } = result;

            return {
                id, lat, lon
            }
        })
    }

    async insert(): Promise<void> {
        if (!this.id) {
            this.id = uuid()
        } else {
            throw new Error('Cannot insert something already inserted...')
        }

        await pool.execute("INSERT INTO `ads`(`id`, `name`, `description`, `price`, `url`, `lat`, `lon`) VALUES(:id, :name, :description, :price, :url, :lat, :lon)", this)
    }
}
