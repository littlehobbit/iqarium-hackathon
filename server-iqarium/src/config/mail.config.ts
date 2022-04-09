import {ConfigService} from "@nestjs/config";

export class READ_MAIL_CONFIG {
    imap: {
        user: '',
        password: '',
        host: 'imap.gmail.com',
        port: 993,
        authTimeout: 10000,
        tls: true,
        tlsOptions: { rejectUnauthorized: false },
    }
}

export class SEND_MAIL_CONFIG {
    service: 'gmail';
    auth: {
        user: '',
        password: '',
    }

}