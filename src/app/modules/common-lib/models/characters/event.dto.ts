import { DataDto } from "../data.dto";

export interface EventsDto extends DataDto{
    available: number;
    collectionURI: string;
    items: EventItemDto[]
    returned: number;
}

export interface EventItemDto extends DataDto{
    resourceURI: string;
    name: string;
}