import { DataDto } from "../data.dto";
import { ComicListDto } from "./comic.min.dto";
import { EventsDto } from "./event.dto";
import { SeriesDto } from "./series.dto";
import { StoriesDto } from "./stories.dto";
import { ThumbnailDto } from "./thumbnail.dto";
import { UrlDto } from "./url.dto";

export interface CharacterListDto extends DataDto{
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: CharacterDto[];
}

export interface CharacterDto extends DataDto{
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    thumbnail: ThumbnailDto;
    comics: ComicListDto;
    series: SeriesDto;
    stories: StoriesDto;
    events: EventsDto;
    urls: UrlDto[];
}