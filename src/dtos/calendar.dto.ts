import { DescriptionDTO } from "./description.dto";

interface CalendarCreateDTO {
    date: Date;
    description: DescriptionDTO[];
}
interface CalendarUpdateDTO {
    description: DescriptionDTO[];
}

export {
    CalendarCreateDTO,
    CalendarUpdateDTO
};