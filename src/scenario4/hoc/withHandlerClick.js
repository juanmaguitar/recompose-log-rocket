import { withHandlers } from "recompose";

const withHandlerClick = withHandlers({
  handleClick: props => e => {
    let { times, onClick, setTimes } = props;
    e.preventDefault()
    setTimes( ++times );
    onClick && onClick();
  }
})

export default withHandlerClick;
