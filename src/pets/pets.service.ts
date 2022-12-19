import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pets.entity';
import {PetDto} from './dto/pet.dto'
@Injectable()
export class PetsService {
    constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) { }

    async findAll(): Promise<Pet[]> {
        return this.petsRepository.find();
    }

    createPet(data:PetDto):Promise<Pet>{
        const newPet = this.petsRepository.create(data);
        return this.petsRepository.save(newPet);
    }

    fineOne(id:number): Promise<Pet>{
        return this.petsRepository.findOneOrFail({where:{id:id}});
    }

    deleteOne(id:number){
        return this.petsRepository.delete(id)

    }



}
