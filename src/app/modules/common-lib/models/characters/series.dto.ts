import { DataDto } from "../data.dto";

export interface SeriesDto extends DataDto{
    available: number;
    collectionURI: string;
    items: SeriesItemDto[]
    returned: number;
}

export interface SeriesItemDto extends DataDto{
    resourceURI: string;
    name: string;
}