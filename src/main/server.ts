import 'module-alias/register';
import DbConnection from '@infrastructure/db/mongodb/helpers/db-connection';
import setupApp from "@main/config/app"
import env from "@main/config/env"

DbConnection.connect(env.mongoUrl).then(() => {
    console.log('MongoDB connected');
    const app = setupApp()
    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`))
    //start express
}).catch(console.error)