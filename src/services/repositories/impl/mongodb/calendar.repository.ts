/* eslint-disable @typescript-eslint/no-var-requires */
// tslint:disable-next-line: no-var-requires
const mongoose = require('mongoose');
import { Query } from "mongoose";
import { mongoosedb } from "../../../../common/persistence/mongodb.persistence";
import { CalendarRepository } from "../../calendar.repository";
import Calendar, { ICalendar } from "./../../domain/calendar";

export class CalendarMongoDBRepository implements CalendarRepository {
    constructor() {
        const mongo = new mongoosedb();
    }
    public async all(): Promise<ICalendar[]> {
        return new Promise<ICalendar[]>((resolve, reject) => {
            resolve(Calendar.find({}).exec());
        });
    }

    public async find(id: string): Promise<ICalendar | null> {
        return new Promise<ICalendar | null>((resolve, reject) => {
            const query = Calendar.find({ _id: mongoose.Types.ObjectId(id) });
            query.then(x => {
                resolve(x[0]);
            });
            // resolve(query.exec()[0]);
        });
    }

    public async store(calendar: ICalendar): Promise<ICalendar> {
        return new Promise<ICalendar>((resolve, reject) => {
            console.log(calendar);
            calendar.save();
            resolve(calendar);
        });
    }
    public async update(id: string, calendar: ICalendar): Promise<ICalendar> {
        return new Promise<ICalendar>((resolve, reject) => {
            Calendar.findOneAndUpdate({ _id: mongoose.Types.ObjectId(id) }, calendar);
            resolve(calendar);
        });
    }
    public async remove(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {

            Calendar.findOneAndRemove({_id: mongoose.Types.ObjectId(id)});
            resolve();
        });
    }
}