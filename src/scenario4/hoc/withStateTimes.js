import { withState } from "recompose";

const withStateTimes = withState('times', 'setTimes', 0)

export default withStateTimes;
