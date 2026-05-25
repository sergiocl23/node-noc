import { envs } from "./config/plugins/envs.plugin";
import { MongoDatabase } from "./data/mongo";
import { Server } from "./presentation/server";

(async () => {
    main();
})();


async function main(){

    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL!,
        dbName: envs.MONGO_DB_NAME!,
    });

    // Crear una coleccion (MONGO)
    // const newLog = await LogModel.create({
    //     message: 'Test message desde Mongo',
    //     origin: 'App.ts',
    //     level: 'low'
    // });

    // await newLog.save();
    // console.log(newLog);
    // const logs = await LogModel.find();
    // console.log(logs);


    // Prisma (Postgresql)
    // const adapter = new PrismaPg('postgresql://postgres:123456@localhost:5432/NOC');
    // const prisma = new PrismaClient({ adapter });
    
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: 'HIGH',
    //         message: 'Teste message',
    //         origin: 'App.ts'
    //     }
    // })

    // const logs = await prisma.logModel.findMany({
    //     where: {
    //         level: 'MEDIUM'
    //     }
    // });

    // console.log(logs);

    Server.start();
}