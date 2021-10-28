/* eslint-disable @typescript-eslint/no-unused-vars */
import { Document, model, Model, Schema } from "mongoose";

export interface IDescription extends Document {
    _id: string;
    order: number;
    description: string;
    file?: string;
    calendar_id: string;
}

const Calendar = model('Calendar');

const DescriptionSchema: Schema = new Schema({
    order: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    file: {
        type: String,
        required: false,
    },
    calendar_id: {
        type: Schema.Types.ObjectId,
        ref: "Calendar"
    }
});

const Description: Model<IDescription> = model('Description', DescriptionSchema);

module.exports = Description;