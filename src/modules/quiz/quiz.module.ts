import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Quiz } from './quiz.entity';
import { QustionController } from './question.controller';
import { QuestionService } from './question.service';
import { Question } from './question.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Quiz,Question])],
  controllers: [QuizController,QustionController],
  providers: [QuizService,QuestionService]
})
export class QuizModule {}
