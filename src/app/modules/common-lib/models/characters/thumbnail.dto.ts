import { DataDto } from "../data.dto";

export interface ThumbnailDto extends DataDto{
    path: string;
    extension: string;
}