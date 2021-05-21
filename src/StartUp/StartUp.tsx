import React, {Component, StrictMode} from 'react';
import RoomAdmin from '../RoomAdmin/RoomAdmin';
import './Asset/index.css';

interface Properties {
}

interface State {
}

export default class StartUp extends Component<Properties, State> {
    render() {
        return <StrictMode><application is="application"><RoomAdmin /></application></StrictMode>;
    }
}
