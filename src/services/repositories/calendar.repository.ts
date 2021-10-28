import { ICalendar } from "./domain/calendar";

export interface CalendarRepository {
    all(): Promise<ICalendar[]>;
    find(id: string): Promise<ICalendar | null>;
    store(calendar: ICalendar): Promise<ICalendar>;
    update(id: string, calendar: ICalendar): Promise<ICalendar>;
    remove(id: string): Promise<void>;
}