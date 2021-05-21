import RoomAdminController from '../RoomAdminController';
import RoomAdminPresenter from '../RoomAdminPresenter';
import RoomAdminInteractor from '../RoomAdminInteractor';

class RoomAdminContainer {
    controller: RoomAdminController = new RoomAdminController(new RoomAdminPresenter(), new RoomAdminInteractor());
}

const Container: RoomAdminContainer = new RoomAdminContainer();
export default Container;
