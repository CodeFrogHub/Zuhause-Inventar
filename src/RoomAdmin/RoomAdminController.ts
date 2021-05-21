import RoomAdmin from './RoomAdmin';
import RoomAdminPresenter from './RoomAdminPresenter';
import RoomAdminInteractor, {RoomLoadResponse} from './RoomAdminInteractor';

export default class RoomAdminController {
    private viewInstance?: RoomAdmin;
    private interactor: RoomAdminInteractor;
    private presenter: RoomAdminPresenter;

    constructor(presenter: RoomAdminPresenter, interactor:RoomAdminInteractor) {
        this.interactor = interactor;
        this.presenter = presenter;
    }

    private get view(): RoomAdmin {
        return this.viewInstance as RoomAdmin;
    }

    public attach(view: RoomAdmin): void {
        this.viewInstance = view;
        this.loadAndPresentRoomList();
    }

    private loadAndPresentRoomList(): void {
        this.interactor.loadRoomList().then(this.onLoadRoomList.bind(this));
    }

    private onLoadRoomList(roomLoadResponse:RoomLoadResponse):void {
        this.view.model = this.presenter.present(roomLoadResponse);
    }
}
