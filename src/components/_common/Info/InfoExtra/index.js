import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Collapse from 'material-ui/transitions/Collapse';

import './style.css';
import ScrollAnimation from '../../ScrollAnimation';
import MuiButton from '../../../_common/MuiButton';

export default class InfoExtra extends Component {
    state = {
        isExtraOpen: false
    };

    static propTypes = {
        extra: PropTypes.array.isRequired,
        color: PropTypes.string.isRequired
    };

    handleExtraToggle = () => this.setState((prevState) => ({
        isExtraOpen: !prevState.isExtraOpen
    }));

    render() {
        const {extra, color} = this.props;
        const {isExtraOpen} = this.state;
        const contentClass = cn('info-extra__content', {'info-extra__content_show': isExtraOpen});
        const extraContent = extra.map(({id, text}) => <p key={id}>{text}</p>);
        const buttonText = isExtraOpen ? 'Короче' : 'Подробнее';
        return (
            <div className="info-extra">
                <Collapse in={isExtraOpen} timeout={800}>
                    <div className={contentClass}>
                        {extraContent}
                    </div>
                </Collapse>
                <ScrollAnimation name="bounceInUp" offset={0}>
                    <MuiButton variant="raised" kind={color} onClick={this.handleExtraToggle}>
                        {buttonText}
                    </MuiButton>
                </ScrollAnimation>
            </div>
        );
    }
}
