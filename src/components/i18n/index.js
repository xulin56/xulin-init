import React from 'react';
import {autobind} from 'core-decorators';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ZH,EN,FA} from 'i18n';
import {sStore} from 'js';

@autobind
class I18n extends React.Component{
    static propsTypes = {
        message : PropTypes.string.isRequired,
    };
    txt = '';
    componentWillMount(){
        let langObj = {
            'zh' : ZH,
            'en' : EN,
            'fa' : FA
        };
        if(sStore.get('lang')){
            let currentLang = sStore.get('lang');
            const {message} = this.props;
            this.txt = langObj[currentLang][message];
        }else {
            const {message} = this.props;
            this.txt = langObj['zh'][message]
        }

    }
    componentWillUpdate(state) {
        const {message} = this.props;
        switch (state.lang) {
            case 'zh' :
                this.txt = ZH[message];
                break;
            case 'en' :
                this.txt = EN[message];
                break;
            case 'fa' :
                this.txt = FA[message];
            break;
            default :
                this.txt = ZH[message];
        }
    }
    render(){
        const {txt} = this;
        return(
            <div className="i18n">
                <span>{txt}</span>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps)=>{
    return {
        lang : state.lang.lang
    }
};

export default connect(mapStateToProps)(I18n)