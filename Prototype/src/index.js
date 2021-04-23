import React from 'react';
import ReactDOM from 'react-dom';
import RoomAdmin from "./RoomAdmin/RoomAdmin";
import Menu from "./Menu/Menu";
import RoomAdminModel from "./RoomAdmin/RoomAdminModel";
import MenuModel from "./Menu/MenuModel";
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <application is="application">
            <Menu model={new MenuModel()}/>
            <RoomAdmin model={new RoomAdminModel()}/>
        </application>
    </React.StrictMode>,
    document.getElementById('root')
);

