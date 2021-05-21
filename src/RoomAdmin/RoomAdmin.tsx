import React, {Component} from "react";
import RoomAdminModel from "./RoomAdminModel";
import './Asset/RoomAdmin.css';
import Container from "./DependencyInjection/Container";
import Item from './Item';
import ItemModel from './ItemModel';

interface Properties {
}

interface State {
    model: RoomAdminModel
}

export default class RoomAdmin extends Component<Properties, State> {
    constructor(props: Properties) {
        super(props);
        this.state = {model: new RoomAdminModel()};
    }

    set model(value: RoomAdminModel) {
        this.setState({model: value});
    }

    componentDidMount(): void {
        Container.controller.attach(this);
    }

    render(): JSX.Element {
        const model: RoomAdminModel = this.state.model;
        return (
            <page-content>
                <room-list>
                    {model.roomList.map(this.renderItem.bind(this))}
                </room-list>
            </page-content>
        );
    }

    renderItem(room: ItemModel, index: number): JSX.Element {
        return <Item key={'Room-List-' + index} model={room}/>
    }
}
