import RoomAdminModel from './RoomAdminModel';
import {RoomLoadResponse} from './RoomAdminInteractor';

export default class RoomAdminPresenter {
    present(roomLoadResponse: RoomLoadResponse): RoomAdminModel {
        return new RoomAdminModel();
    }
}
