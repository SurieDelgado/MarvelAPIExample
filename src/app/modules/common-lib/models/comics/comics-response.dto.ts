import { DataDto } from "../data.dto";
import { ComicsDto } from "./comics.dto";

export interface ComicsResponseDto extends DataDto{
    data: ComicsDataDto;
}

export interface ComicsDataDto extends DataDto{
    results: ComicsDto[];
}