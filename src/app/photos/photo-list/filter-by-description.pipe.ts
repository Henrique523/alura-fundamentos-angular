import {Pipe, PipeTransform} from "@angular/core";
import IPhoto from "../../interfaces/IPhoto";

@Pipe({ name: "filterByDescription" })
export class FilterByDescription implements PipeTransform{
  transform(photos: IPhoto[], descriptionQuery: string): IPhoto[] {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery));
    }

    return photos;
  }

}
