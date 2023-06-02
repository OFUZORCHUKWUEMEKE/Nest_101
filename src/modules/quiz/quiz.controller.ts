import { Body, Controller, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { Get ,Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/CreateDto';

@Controller('quiz')
export class QuizController {
    constructor(private  quizService:QuizService){}

    @Get('/')
    getAllQuiz(){
      return this.quizService.getAllQuiz()
    }

    @Post('/create')
    @HttpCode(201)
    @UsePipes(ValidationPipe)
    createPost(@Body() quizdata:CreateQuizDto){
        return quizdata
    }
}
