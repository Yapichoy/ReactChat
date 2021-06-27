import * as PropTypes from "prop-types";
import readedSvg from "../../resources/img/readed.svg";
import unreadedPng from "../../resources/img/check.svg";

const IconRead = ({isMe, isReaded}) => {
    if (isMe) {
        if (isReaded) {
            return <img className='message__icon-readed' src={readedSvg} alt=""/>
        } else {
            return <img className='message__icon-readed' src={unreadedPng} alt=""/>
        }
    }
    return false;
}
IconRead.propTypes = {
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool
}

export default IconRead;