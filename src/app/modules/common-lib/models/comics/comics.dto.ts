import { DataDto } from "../data.dto";

export interface ComicsDto extends DataDto{
    id: number;
    digitalId: number;
    title: string;
    issueNumber: number;
    variantDescription: string;
    description: string;
    modified: string;
    isbn: string;
    upc: string;
    diamondCode: string;
    ean: string;
    issn: string;
    format: string;
    pageCount: number;
    textObjects: TextObject[];
    resourceURI: string;
    urls: Url[];
    series: Series;
    dates: DateItem[];
    prices: Price[];
    thumbnail: Image;
    images: Image[];
    creators: CreatorData;
    characters: CharacterData;
    stories: StoryData;
    events: EventData;
  }
  
  interface TextObject {
    type: string;
    language: string;
    text: string;
  }
  
  interface Url {
    type: string;
    url: string;
  }
  
  interface Series {
    resourceURI: string;
    name: string;
  }
  
  interface DateItem {
    type: string;
    date: string;
  }
  
  interface Price {
    type: string;
    price: number;
  }
  
  interface Image {
    path: string;
    extension: string;
  }
  
  interface Creator {
    resourceURI: string;
    name: string;
    role: string;
  }
  
  interface CreatorData {
    available: number;
    collectionURI: string;
    items: Creator[];
    returned: number;
  }
  
  interface Character {
    resourceURI: string;
    name: string;
  }
  
  interface CharacterData {
    available: number;
    collectionURI: string;
    items: Character[];
    returned: number;
  }
  
  interface Story {
    resourceURI: string;
    name: string;
    type: string;
  }
  
  interface StoryData {
    available: number;
    collectionURI: string;
    items: Story[];
    returned: number;
  }
  
  interface Event {
    available: number;
    collectionURI: string;
    returned: number;
  }
  
  interface EventData {
    available: number;
    collectionURI: string;
    items: Event[];
    returned: number;
  }