import { Injectable } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/create-question-dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Question } from "./question.entity";
import { Repository } from "typeorm";
import { CreateQuizDto } from "./dto/CreateDto";
import { Quiz } from "./quiz.entity";


@Injectable()
export class QuestionService {
    constructor(@InjectRepository(Question) private questionRepository:Repository<Question>){}

    async createQuestion(question:CreateQuestionDto,quiz:Quiz):Promise<Question>{
       const newQuestion = await  this.questionRepository.save({question:question.question})

       quiz.questions = [newQuestion,...quiz.questions]

       await quiz.save()

       return newQuestion
    }

}