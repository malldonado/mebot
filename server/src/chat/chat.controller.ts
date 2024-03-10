import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/chat')
export class ChatController {

    @Post()
    async createConversation() {
        return JSON.stringify({
            "nome": "Diego"
        });
    }

}
