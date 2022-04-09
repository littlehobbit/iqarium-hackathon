import {Controller, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {CategoryAnalysisService} from "../../services/category-analysis/category-analysis.service";

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
    suggestClassification(
        @Param('id', ParseIntPipe) id: number, suggest: string, status: boolean,
    ) {
        return this.categoryAnalysisService.suggestClassification(id, suggest, status);
    }

    @Get('/getManualState')
    getManualState() {
        return this.categoryAnalysisService.getAllManual();
    }

    @Post('/addReplyToRequest/:id')
    addReplyToRequest(@Param('id', ParseIntPipe) id: number, replyText: string) {
        return this.categoryAnalysisService.addReply(id, replyText);
    }





    @Post('/AIClassification/:id')
    AIClassification() {

    }

    @Get('/getClassification')
    getClassification() {

    }

    @Get('/getClassification/:id')
    getClassificationById() {

    }

    @Post('/checkClassificationByExpert/:id/:ExpertId')
    checkClassificationByExpert() {

    }



    @Get('/getManualState/:id')
    getManualStateById() {

    }


}
