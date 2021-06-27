import * as PropTypes from "prop-types";
import classNames from 'classnames';
import './Message.scss';
import {IconRead, Time} from "../index";

const Message = ({avatar, user, text, date, isMe, isReaded, attachments, isTyping}) => {
  return (
    <div className={classNames('message', {
      'message--isme': isMe,
      'message==is-typing': isTyping
    })}>
      <div className="message__content">
        <IconRead isMe={isMe} isReaded={isReaded}/>
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.name}`}/>
        </div>
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
            {isTyping && (<div className="message__typing">
              <span className="dot-one"></span>
              <span className="dot-two"></span>
              <span className="dot-three"></span>
            </div>)}
          </div>
          <div className="message__attachments">
            {
              attachments.map(item => (
                < div className="message__attachments--item">
                  <img src={item.url} alt={item.filename}/>
                </div>
              ))
            }
          </div>
          {date && (
          <span className="message__date">
          <Time date={date}/>
         </span>
          )}
        </div>
      </div>
    </div>
  )
}

Message.defaultProps = {
  user: {},
  attachments: [
    {
      filename: 'img.jpg',
      url: 'http://www.lovetime.ru/images/rub_2_3/62501.jpg'
    }
  ]
}
Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool
}
export default Message;