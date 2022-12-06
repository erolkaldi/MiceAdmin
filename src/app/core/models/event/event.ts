import { Allotment } from "./allotment"

export class Event{
    id:string
    code:string=""
    name:string=""
    eventType:number
    beginDate:Date
    endDate:Date
    registerBegin:Date
    registerEnd:Date
    contact:string=""
    email:string=""
    phone:string=""
    feeType:number
    allotments:Allotment[]
}