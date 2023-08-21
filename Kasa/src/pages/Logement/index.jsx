import { Component } from "react";
import LogementContainer from "../../components/LogementContainer";


class logement extends Component {

  constructor(props) {
    super(props)
    this.state = {
      logementData: {},
    }
  }

  componentDidMount() {
    const { id } = this.props

    fetch(`http://localhost:3000/logement?id=${id}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        this.setState({ logementData: jsonResponse?.logementData })
      })
  }

  render() {
    const { id } = this.props
    const { logementData } = this.state
    const {

      description
    } = logementData
    return <div>
      <LogementContainer Logement={id} description={description} />
    </div>
  }
}

export default logement