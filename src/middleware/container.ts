import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import express from 'express';
import { CalendarServices } from "../services/calendar.services";
import { CalendarMongoDBRepository } from "../services/repositories/impl/mongodb/calendar.repository";

export class Container {
    private app: express.Application;
    constructor(app: express.Application) {
        this.app = app;
        this.actionContainer();
    }
    private actionContainer(): void {
        const container = createContainer({
            injectionMode: 'CLASSIC'
        });
        container.register({
            // repositories
            calendarRepository: asClass(CalendarMongoDBRepository).scoped(),

            // services
            calendarServices: asClass(CalendarServices).scoped()
        });

        this.app.use(scopePerRequest(container));
    }
}