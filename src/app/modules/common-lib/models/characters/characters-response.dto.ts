import { DataDto } from "../data.dto";
import { CharacterListDto } from "./characters.dto";

export interface CharactersResponseDto extends DataDto{
    data: CharacterListDto;
}