import StartUp from './StartUp';
import {render, RenderResult} from '@testing-library/react';

jest.mock('../RoomAdmin/RoomAdmin', function () {
    return function (props: any) {
        return <div>test::RoomAdmin:</div>;
    };
});

describe(StartUp, function () {

    beforeEach(function () {
    });

    function createUi(): RenderResult {
        return render(<StartUp/>);
    }

    it('should render main of application', function () {
        const result: RenderResult = createUi();
        expect(result.container).toContainHTML('test::RoomAdmin:');
    });
});
