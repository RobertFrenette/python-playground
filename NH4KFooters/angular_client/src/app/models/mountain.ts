export class Mountain {
  private _mountainName: string;
  private _mountainElevation: string;
  private _mountainEffort: string;
  private _mountainURL: string;
  private _mountainPic: string;
  private _mountainDesc: string;

  constructor(mountainName: string, mountainElevation: string, mountainEffort: string, mountainURL: string, mountainPic: string) {
    this._mountainName = mountainName;
    this._mountainElevation = mountainElevation;
    this._mountainEffort = mountainEffort;
    this._mountainURL = mountainURL;
    this._mountainPic = mountainPic;
  }

  set mountainDesc(mountainDesc: string) {
    this._mountainDesc = mountainDesc;
  }

  get mountainName(): string {
    return this._mountainName;
  }
  get mountainElevation(): string {
    return this._mountainElevation;
  }
  get mountainEffort(): string {
    return this._mountainEffort;
  }
  get mountainURL(): string {
    return this._mountainURL;
  }
  get mountainPic(): string {
    return this._mountainPic;
  }
  get mountainDesc(): string {
    return this._mountainDesc;
  }
}
