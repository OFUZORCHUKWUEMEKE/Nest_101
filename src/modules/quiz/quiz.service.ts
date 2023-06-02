import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
     getAllQuiz ():string{
        console.log('get alll controllers')
        return 'get all quiz from the controller'
    }
}
