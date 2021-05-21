import {render, RenderResult} from '@testing-library/react';
import Item from './Item';
import ItemModel from './ItemModel';

describe(Item, function () {
    let model: ItemModel;

    beforeEach(function () {
        model = new ItemModel();
    });

    function createUi(): RenderResult {
        return render(<Item  model={model}/>);
    }

    it('should render a list item', function () {
        model.name = 'test::name:';
        const result: RenderResult = createUi();
        expect(result.container).toHaveTextContent('test::name:');
    });
});
