export class RoomModel {
    name = '';
}

export default class RoomAdminModel {
    roomList = [];

    constructor() {
        const room1 = new RoomModel();
        room1.name = 'Wohnzimmer';
        const room2 = new RoomModel();
        room2.name = 'Bad';
        const room3 = new RoomModel();
        room3.name = 'Küche';
        this.roomList = [room1, room2, room3]
    }
}
