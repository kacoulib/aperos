import { Tag } from './tag';
import { Category } from './category';


export class Apero{
    abstract : String;
    category : String;
    content : String;
    created_at : String;
    date : string;
    id : number;
    status : string;
    tags : Array<Tag>;
    title : String;
    updated_at : String;
    uri : String;
    user : Object;
    user_id : number;
}