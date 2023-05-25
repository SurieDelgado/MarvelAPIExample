import { DataDto } from "../data.dto";

export interface StoriesDto extends DataDto{
    available: number;
    collectionURI: string;
    items: StoriesItemDto[]
    returned: number;
}

export interface StoriesItemDto extends DataDto{
    resourceURI: string;
    name: string;
    type: string;
}