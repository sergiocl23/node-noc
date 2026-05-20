import { SendEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
  new FileSystemDatasource(),
);

const emailService = new EmailService();

export class Server {

    public static start() {

        console.log('Server started ...');


        // Mandar email
        new SendEmailLogs(
            emailService,
            fileSystemLogRepository
        ).execute(
            ['andres.lozano290820@gmail.com']
        )
        // emailService.sendEmailWithFileSystemLogs(
        //     ['andres.lozano290820@gmail.com', 'sergio.random187@gmail.com']
        // );

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         // const url = 'https://google.com';
        //         const url = 'http://localhost:3000/posts';
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${ url } is ok`),
        //             ( error ) => console.log( error ),
        //         ).execute(url);
        //         // new CheckService().execute('http://localhost:3000/posts');

        //     }

        // );

    }

}