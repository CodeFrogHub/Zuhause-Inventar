import RoomAdmin from "../RoomAdmin";

class RoomAdminContainer {
    controller: any = {attach:(view:RoomAdmin) => true};
}

const Container:RoomAdminContainer = new RoomAdminContainer();
export default Container;
