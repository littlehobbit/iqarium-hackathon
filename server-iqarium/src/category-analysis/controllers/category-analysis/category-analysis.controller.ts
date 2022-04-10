import {
    Body,
    Controller,
    Get,
    Param,
    ParseBoolPipe,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import {CategoryAnalysisService} from "../../services/category-analysis/category-analysis.service";
import {SuggestClassBodyDto} from "../../dto/SuggestClassBody.dto";
import {AddReplyDto} from "../../dto/AddReply.dto";

@Controller('category-analysis')
export class CategoryAnalysisController {
    constructor(private categoryAnalysisService: CategoryAnalysisService) {
    }

    @Get('/NotClassified')
    getNotClassified() {
        return this.categoryAnalysisService.getAllNotClassified();
    }

    @Get('/NotClassified/:id')
    getNotClassifiedById(@Param('id', ParseIntPipe) id: number) {
        return this.categoryAnalysisService.getNotClassifiedById(id);
    }

    @Post('/SuggestClassification/:id')
    @UsePipes(ValidationPipe)
    suggestClassification(
        @Param('id', ParseIntPipe) id: number, @Body() confirm: SuggestClassBodyDto,
    ) {
        console.log('bool')
        console.log(Boolean(confirm.status))
        return this.categoryAnalysisService.suggestClassification(id, confirm.suggest, Boolean(confirm.status));
    }

    @Get('/getManualState')
    getManualState() {
        return this.categoryAnalysisService.getAllManual();
    }

    @Get('/getManualState/:id')
    getManualById(@Param('id', ParseIntPipe) id: number) {
        return this.categoryAnalysisService.getManualById(id);
    }

    @Post('/addReplyToRequest/:id')
    @UsePipes(ValidationPipe)
    addReplyToRequest(@Param('id', ParseIntPipe) id: number, @Body() reply: AddReplyDto) {
        return this.categoryAnalysisService.addReply(id, reply.replyText);
    }



}
