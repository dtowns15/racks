

export class TodoItem {

  constructor(private _name : string, private _description : string,
    private _dueDate : Date, private _priority : number, private _id?: number) {
  }


  get name() : string {
    return this._name;
  }

  get dueDate() : Date {
    return this._dueDate;
  }

  get priority() :number {
    return this._priority;
  }

  get dsecription() : string {
    return this._description;
  }

  get id() : number {
    return this._id;
  }

  set name(n : string) {
    this._name = n;
  }

  set dueDate(d : Date) {
    this._dueDate = d;
  }

  set priority(p : number) {
    this._priority = p;
  }

  set description(desc : string) {
    this._description = desc;
  }

  set id(num : number) {
    this._id = num;
  }

}
