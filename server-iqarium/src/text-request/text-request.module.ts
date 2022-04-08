import { Module } from '@nestjs/common';
import { MailController } from './controllers/mail/mail.controller';
import { FormController } from './controllers/form/form.controller';
import { FormService } from './services/form/form.service';
import { MailService } from './services/mail/mail.service';

@Module({
  controllers: [MailController, FormController],
  providers: [FormService, MailService]
})
export class TextRequestModule {}
