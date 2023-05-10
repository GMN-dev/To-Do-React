export default class Item{

    static lastId = 0;

    constructor(name){
        this.id = Item.lastId++
        this.name = name
        this.status = false
    }

        
}