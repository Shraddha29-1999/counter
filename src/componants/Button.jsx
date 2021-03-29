import React, {componants, Component} from "react"
import reactDom from "react-dom";

export default class Button extends Component {

    render() {
        let {name , func} = this.props;
        return(
            <button onClick = { func }>
                {name}
            </button>
        )
    }
}