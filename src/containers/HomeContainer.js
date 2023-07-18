//connnect react and redux

import { connect } from "react-redux"
import Home from "../components/Home"
import { addtocart } from "../services/Actions/action"

const mapStateToProps = state =>({
    cardData:state
})

const mapDispatchToProps = dispatch=>({
    addToCartHandler:data => dispatch(addtocart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
