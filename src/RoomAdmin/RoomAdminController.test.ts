import RoomAdminController from './RoomAdminController';
import RoomAdmin from './RoomAdmin';
import RoomAdminModel from './RoomAdminModel';
import ItemModel from './ItemModel';
import {mock, MockProxy} from 'jest-mock-extended';
import RoomAdminPresenter from './RoomAdminPresenter';
import RoomAdminInteractor, {RoomLoadResponse} from './RoomAdminInteractor';

jest.mock('./RoomAdmin', function () {
    return function (props: any) {
        return null;
    };
});

describe(RoomAdminController, function () {
    let controller: RoomAdminController,
        view: RoomAdmin,
        presenter: RoomAdminPresenter & MockProxy<RoomAdminPresenter>,
        interactor: RoomAdminInteractor & MockProxy<RoomAdminInteractor>
    ;

    beforeEach(function () {
        view = mock<RoomAdmin>();
        presenter = mock<RoomAdminPresenter>();
        interactor = mock<RoomAdminInteractor>();
        controller = new RoomAdminController(presenter, interactor);
    });

    it('should can load room from api and give to view', function (done) {
        const expectedModel: RoomAdminModel = new RoomAdminModel();
        const item: ItemModel = new ItemModel();
        item.name = 'test::name:';
        expectedModel.roomList = [item];
        const loadResponse: RoomLoadResponse = new RoomLoadResponse();

        interactor.loadRoomList.mockResolvedValueOnce(loadResponse);
        presenter.present.mockReturnValueOnce(expectedModel);
        controller.attach(view);

        setTimeout(
            function () {
                expect(view.model).toEqual(expectedModel);
                expect(presenter.present).toBeCalledWith(loadResponse);
                done();
            }
        )
    });
});
