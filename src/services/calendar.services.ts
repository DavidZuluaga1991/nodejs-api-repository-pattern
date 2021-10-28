import { CalendarCreateDTO, CalendarUpdateDTO } from "../dtos/calendar.dto";
import { CalendarRepository } from "./repositories/calendar.repository";
import { ICalendar } from "./repositories/domain/calendar";

export class CalendarServices {
    constructor(private readonly calendarRepository: CalendarRepository) { }

    public async all(): Promise<ICalendar[]> {
        return await this.calendarRepository.all();
    }

    public async find(id: string): Promise<ICalendar | null> {
        return await this.calendarRepository.find(id);
    }

    public async store(calendar: CalendarCreateDTO): Promise<ICalendar> {
        return await this.calendarRepository.store(calendar as ICalendar);
    }

    public async update(id: string, calendar: CalendarUpdateDTO): Promise<ICalendar> {
        return await this.calendarRepository.update(id, calendar as ICalendar);
    }

    public async remove(id: string): Promise<void> {
        return await this.calendarRepository.remove(id);
    }
}