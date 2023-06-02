import {Entity,BaseEntity ,PrimaryGeneratedColumn,Column} from 'typeorm'

@Entity('quizes')
export class Quiz extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment:'The quiz unique identifier'
    })
    id:number;


    @Column({
        type:'varchar'
    })
    title:string
    
    @Column({
        type:'text'

    })
    description:string

}   