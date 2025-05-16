const _brandname = new WeakMap();
const _network = new WeakMap();
const _color = new WeakMap();

export class Phone{
    constructor(brand,network,color){
        _brandname.set(this,brand);
        _network.set(this,brand);
        _color.set(this,()=>{
            return `My iPhone is ${color} color`;
        });

    }
}

// 16WW 