export class Goal {

  private types : string[ ];

  constructor(private _name : string, private _type : string, private _description : string,
    private _currentProgress : number, private _totalProgress : number, private _id?: number) {
    this.types = new Array<string>("Develop","Build","Write", "Read");
  }

  get name() : string {
    return this._name;
  }

  get type() : string {
    return this._type
  }

  get currentProgress() : number {
    return this._currentProgress;
  }

  get totalProgress() : number {
    return this._totalProgress;
  }

  get dsecription() : string {
    return this._description;
  }

  get id() : number {
    return this.id;
  }

  set name(n : string) {
    this._name = n;
  }

  set type(t : string) {
    if(this.types.includes(t)){
      this._type = t;
    }
  }

  set currentProgress(c : number) {
    this._currentProgress = c;
  }

  set totalProgress(t : number) {
    this._totalProgress = t;
  }

  set description(desc : string) {
    this._description = desc;
  }
}
