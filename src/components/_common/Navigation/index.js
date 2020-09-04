import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import Tooltip from 'material-ui/Tooltip';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

import './style.css';
import urls from "../../../utils/urls";

const navLinks = [
    {id: 1, title: 'Главная', icon: 'home', url: urls.home},
    {id: 2, title: 'Обо мне', icon: 'person', url: urls.about},
    {id: 3, title: 'Навыки', icon: 'school', url: urls.skills},
    {id: 4, title: 'Опыт', icon: 'work', url: urls.experience},
    {id: 5, title: 'Портфолио', icon: 'web', url: urls.portfolio},
    {id: 6, title: 'Контакты', icon: 'mail', url: urls.contact}
];

Navigation.propTypes = {
    isDrawer: PropTypes.bool
};

const renderLinks = (isDrawer) => navLinks.map(({id, title, url, icon}) => {
    const link = (
        <Button fullWidth component="div" role="link" tabIndex="-1">
            <NavLink exact={url !== urls.portfolio} className="navigation__link fb-100" activeClassName="navigation__link_active" to={url}>
                <Icon>{icon}</Icon>
            </NavLink>
        </Button>
    );
    return (
        <li key={id}>
            {!isDrawer ? (
                <Tooltip {...{title}} placement="right" enterDelay={300} leaveDelay={100}>
                    {link}
                </Tooltip>
            ) : link}
        </li>
    );
});

export default function Navigation({isDrawer = false}) {
    return (
        <nav className="navigation">
            <ul>
                {renderLinks(isDrawer)}
            </ul>
        </nav>
    );
}