import { Length ,IsNotEmpty } from "class-validator"


export class CreateQuizDto{
    @Length(3,255)
    @IsNotEmpty()
    title:string
    

    @Length(5)
    @IsNotEmpty()
    description:string
} 