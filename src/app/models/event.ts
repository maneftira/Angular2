import { Congresscommitee } from './congresscommitee';
import { OrgCommittees } from './org-committees';
import { Hotel } from './hotel';

export class Event {

constructor(public id?: number,
    public title?: String,
    public date?: Date,
    public datefin?: Date,
    public word_Congress_president?: String,
    public word_At_president?: String,
    public description?: String,
    public congress?: Congresscommitee[],
    public org?: OrgCommittees [],
    public scientific_program?: any,
    public hotel?:Hotel [],
    public area?: any)
    {


    
}


}
