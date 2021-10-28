import { Document, model, Model, ObjectId, Schema } from "mongoose";
import { IDescription } from "./description";

export interface ICalendar extends Document {
    _id?: string;
    date: Date;
    description: IDescription[];
}


const CalendarSchema: Schema = new Schema({
    _id: { type: String },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

// const Calendar: Model<ICalendar> = model('Calendar', CalendarSchema);
// module.exports = Calendar;

export default model<ICalendar>('Calendar', CalendarSchema);