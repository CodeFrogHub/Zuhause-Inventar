import React, {Component} from 'react';
import ItemModel from './ItemModel';

interface Properties {
    model: ItemModel
}

interface State {
}

export default class Item extends Component<Properties, State> {
    render(): JSX.Element {
        const room: ItemModel = this.props.model;
        return (
            <item is="item">{room.name}</item>
        );
    }
}
