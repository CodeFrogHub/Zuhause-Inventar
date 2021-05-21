import ItemModel from './ItemModel';


export default class RoomAdminModel {
    public roomList: ItemModel[] = [];

    constructor() {
        const room1: ItemModel = new ItemModel();
        room1.name = 'Wohnzimmer';
        const room2: ItemModel = new ItemModel();
        room2.name = 'Bad';
        const room3: ItemModel = new ItemModel();
        room3.name = 'Küche';
        this.roomList = [room1, room2, room3]
    }
}
