import {Component, StrictMode} from "react";
import MenuModel from "./MenuModel";
import MenuIcon from "./Asset/ic_menu_48px.svg";
import './Asset/Menu.css';
import PropTypes from 'prop-types';

export default class Menu extends Component {

    static get propTypes() {
        return {
            model: PropTypes.instanceOf(MenuModel).isRequired
        }
    }

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    render() {
        const model = this.props.model;
        return (
            <StrictMode>
                <top-bar>
                    <menu is="top-bar--menu" title="Menü" onClick={this.onMenu.bind(this)}>
                        <img src={MenuIcon} alt="Menü"/>
                    </menu>
                </top-bar>
                <menu is="application--menu" class={this.state.open ? 'open' : ''}>
                    {model.menuList.map((menuItem) => <menu-item>{menuItem.i18N.title}</menu-item>)}
                </menu>
            </StrictMode>
        );
    }

    onMenu() {
        this.setState({open: this.state.open === false});
    }
}
