import {Component} from "react";
import RoomAdminModel from "./RoomAdminModel";
import PropTypes from 'prop-types';
import './Asset/RoomAdmin.css';

export default class RoomAdmin extends Component {

    static get propTypes() {
        return {
            model: PropTypes.instanceOf(RoomAdminModel).isRequired
        }
    }

    render() {
        const model = this.props.model;
        return (
            <page-content>
                <room-list>
                    {model.roomList.map(this.renderItem.bind(this))}
                </room-list>
            </page-content>
        );
    }

    renderItem(room, i) {
        return <item is="item" key={'Room-List-' + i}>{room.name}</item>
    }
}
