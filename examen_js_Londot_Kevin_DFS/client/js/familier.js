class Familier {
    constructor(id,name, level,type , description ) {
        this.id = id;
        this.name = name ;
        this.level = level ;
        this.type = type ;
        this.description = description ;
    }

    get id() {
        return this.id;
    }

    set id(id) {
        this.id = id ;
    }
    get name() {
        return this._name;
    }

    set name(nom) {
        this._name = nom ;
    }
    
    get level() {
        return this._level;
    }

    set level(niveau) {
        this._level = niveau ;
    }
    
    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type ;
    }
    get description() {
        return this._description;
    }

    set description(description) {
        this._description = description ;
    }
    
}
module.exports = Familier;

