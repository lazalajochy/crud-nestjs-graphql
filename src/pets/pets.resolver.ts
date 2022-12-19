import {Query, Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { PetsService } from './pets.service';
import { Pet } from './pets.entity';
import { PetDto } from './dto/pet.dto';

@Resolver(of => Pet)
export class PetsResolver {
    constructor(private petService: PetsService){}

    @Query(() => [Pet])
    pets():Promise<Pet[]>{
        return this.petService.findAll()
    }

    @Mutation(() => Pet)
    createPet(@Args('data') data:PetDto):Promise<Pet>{
        return this.petService.createPet(data);
    };

    @Query(() => Pet)
    getPet(@Args('id', {type: () => Int}) id: number): Promise<Pet>{
        return this.petService.fineOne(id)
    }

    @Query(() => Pet)
    deleteOne(@Args('id',{type: () => Int}) id: number){
        return this.petService.deleteOne(id);

    }


}
