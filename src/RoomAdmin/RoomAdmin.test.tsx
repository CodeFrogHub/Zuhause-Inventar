import RoomAdmin from './RoomAdmin';
import RoomAdminModel from './RoomAdminModel';
import {render, RenderResult} from '@testing-library/react';
import Container from './DependencyInjection/Container';
import ItemModel from './ItemModel';

jest.mock('./DependencyInjection/Container', function () {
    return {controller: {attach: jest.fn()}};
});
jest.mock('./Item', function () {
    return function (props:any):JSX.Element {
        return <div>test:Item:{JSON.stringify(props)}</div>
    }
})

describe(RoomAdmin, function () {
    let model: RoomAdminModel, viewInstance: RoomAdmin;

    beforeEach(function () {
        model = new RoomAdminModel();
        (Container.controller.attach as jest.Mock).mockImplementation(
            function (view: RoomAdmin): void {
                viewInstance = view;
            }
        );
    });

    function createUi(): RenderResult {
        return render(<RoomAdmin/>);
    }

    it('should render a room list', function () {
        const room1: ItemModel = new ItemModel();
        room1.name = 'test::name:';
        model.roomList = [room1];

        const result: RenderResult = createUi();

        viewInstance.model = model;

        expect(result.container).toHaveTextContent('test::name:');
    });
});
