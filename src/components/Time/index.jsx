import * as PropTypes from "prop-types";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import rulocale from 'date-fns/locale/ru';

const Time = ({date}) => formatDistanceToNow(new Date(date), {addSuffix: true, locale: rulocale})
Time.propTypes = {
    date: PropTypes.string
}

export default Time;