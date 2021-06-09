import * as PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import rulocale from 'date-fns/locale/ru';
import classNames from 'classnames';
import readedSvg from '../../resources/img/readed.svg';
import unreadedPng from '../../resources/img/check.svg';
import './Message.scss';

const Message = ({avatar, user, text, date, isMe, isReaded, attachments}) => {
  return (
    <div className={classNames('message', {'message--isme': isMe})}>
      <div className="message__content">
        {isMe && isReaded && <img className='message__icon-readed' src={readedSvg} alt=""/>}
        {isMe && !isReaded && <img className='message__icon-readed' src={unreadedPng} alt=""/>}
        <div className="message__avatar">
          <img src={avatar} alt={`Avatar ${user.name}`}/>
        </div>
        <div className="message__info">
          <div className="message__bubble">
            <p className="message__text">{text}</p>
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
          <span className="message__date">
          {formatDistanceToNow(new Date(date), {addSuffix: true, locale: rulocale})}
         </span>
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
  attachments: PropTypes.array
}
export default Message;