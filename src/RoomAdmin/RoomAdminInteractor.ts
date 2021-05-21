export class RoomLoadResponse {
}

export default class RoomAdminInteractor {
    public async loadRoomList():Promise<RoomLoadResponse> {

        let response = new RoomLoadResponse();
        return response;
    }
}
