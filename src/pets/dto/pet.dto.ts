import { Field, InputType } from "@nestjs/graphql";
import {IsAlpha} from 'class-validator'

@InputType()
export class PetDto{
    @IsAlpha()
    @Field()
    name: string;

    @IsAlpha()
    @Field({nullable:true})
    type?:string
}