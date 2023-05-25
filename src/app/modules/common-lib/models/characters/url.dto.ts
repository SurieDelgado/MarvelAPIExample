import { DataDto } from "../data.dto";

export interface UrlDto extends DataDto{
    type: string;
    url: string;
}