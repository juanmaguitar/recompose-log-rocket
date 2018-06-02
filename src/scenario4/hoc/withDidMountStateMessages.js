import { lifecycle } from "recompose";

const getPendingMessages = () => {
  const randomNumber = Math.ceil(Math.random()*10)
  return new Promise( resolve => {
    setTimeout(
      () => resolve(randomNumber),
      randomNumber * 1000
    )
  })
}

const withPendingNotificacions = lifecycle({
  componentDidMount() {
    this.setState({ loading: true })
    getPendingMessages()
      .then(messages => {
        this.setState({ loading: false, messages });
      })
  }
})

export default withPendingNotificacions;
