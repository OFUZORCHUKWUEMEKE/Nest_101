import { Injectable } from '@nestjs/common';
import { Quiz } from './quiz.entity';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'
import { CreateQuizDto } from './dto/CreateDto';

@Injectable()
export class QuizService {
    constructor(@InjectRepository(Quiz) private quizRepository:Repository<Quiz>){}

    // @InjectRepository(Quiz)
     getAllQuiz(){
        return this.quizRepository.find({})
      
    }
    async getQuizById(id){
        return await this.quizRepository.findOne(id)
    }

    async createNewQuiz(quiz:CreateQuizDto){
        return this.quizRepository.save(quiz)
    }
}
