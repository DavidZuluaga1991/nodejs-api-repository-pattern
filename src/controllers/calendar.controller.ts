import { Response, Request } from "express";
import { route, GET, POST, PUT, DELETE } from "awilix-express";
import { CalendarServices } from "../services/calendar.services";
import { BaseController } from "../common/controllers/base.controller";
import { CalendarCreateDTO, CalendarUpdateDTO } from "../dtos/calendar.dto";

@route('/calendar')
export class CalendarController extends BaseController {
    constructor(private readonly calendarServices: CalendarServices) {
        super();
    }

    @GET()
    public async all(req: Request, res: Response) {
        try {
            res.send(
                await this.calendarServices.all()
            );
        } catch (error) {
            this.handleException(error, res);
        }
    }

    @route(':id')
    @GET()
    public async find(req: Request, res: Response) {
        try {
            const id = req.params.id;
            res.send(
                await this.calendarServices.find(id)
            );
        } catch (error) {
            this.handleException(error, res);
        }
    }

    @POST()
    public async store(req: Request, res: Response) {
        try {
            await this.calendarServices.store({
                date: req.body.date,
                description: req.body.description
            } as CalendarCreateDTO);
            res.send();
        } catch (error) {
            this.handleException(error, res);
        }
    }

    @route(':id')
    @PUT()
    public async update(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const data: CalendarUpdateDTO = {
                description: req.body.description
            };
            await this.calendarServices.update(id, data);
            res.send();
        } catch (error) {
            this.handleException(error, res);
        }
    }

    @route(':id')
    @DELETE()
    public async remove(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await this.calendarServices.remove(id);
            res.send();
        } catch (error) {
            this.handleException(error, res);
        }
    }

}