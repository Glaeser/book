export class Liste<T>{

    private _obj: T;
    public Set(obj: T): void {
        this._obj = obj;
    }
    public GetObj(): T {
        return this._obj;
    }
}


class Epps {
    DoEpps() {
        let l = new Liste<Epps>();
        l.Set(this);
        l.GetObj().DoEpps;
    }
}