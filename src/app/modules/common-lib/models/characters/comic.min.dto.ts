import { DataDto } from "../data.dto";

export interface ComicListDto{
    available: number;
    collectionURI: string;
    items: ComicMinDto[];
    returned: number;
}

export interface ComicMinDto extends DataDto{
    resourceURI: string;
    name: string;
}