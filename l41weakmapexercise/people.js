const _fullname = new WeakMap();
export class People{
    constructor(name){
        //procted property with weakmap
        _fullname.set(this,name);
    }

    getname(){
        return _fullname.get(this);
    }
}