import classNames from 'classnames';
import './DialogItem.scss';
import {Time, IconRead} from "../index";

const getAvatar = avatar => {
    if (avatar) {
        return  <img src={avatar}/>;
    } else {
        //
    }
}
const DialogItem = ({user, messages}) => {
    return (
        <div className={"dialogs__item"}>
            <div className="dialogs__item-avatar">
                {getAvatar("https://sun1.48276.userapi.com/s/v1/ig2/2or03xuUiMMHdGTecsTfDFCp1-tRW56zP3Kr1K5nPpZgC84p3tQ1U9cI9W_TX3JSzvhAuSmlh3fV9o-DQNRVsYPH.jpg?size=50x0&quality=96&crop=0,175,577,577&ava=1")}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>Cbdf Sffssdf</b>
                    <span><Time date={new Date()}/> </span>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>some body once told me</p>
                    <IconRead isMe={true} isReaded={false}/>
                    <div className="dialogs_item-info-bottom-count">3</div>
                </div>
            </div>
        </div>
    )
}

export default DialogItem;