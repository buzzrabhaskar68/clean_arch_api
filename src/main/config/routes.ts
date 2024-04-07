import {Express, Router, Response, Request} from 'express'

export default (app: Express):void => {
    const router = Router()
    app.get('/health', (req: Request, res: Response) => {
        res.status(200).json({message: 'OK'});
    })
    app.use(router)
}