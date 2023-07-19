//connnect react and redux

import { connect } from "react-redux"
import Home from "../components/Home"
import { addtocart } from "../services/Actions/action"
import { removetocart } from "../services/Actions/action"

const mapStateToProps = state => ({
    data: state.cardItems
})

const mapDispatchToProps = dispatch => ({
    //create function
    
    addToCartHandler: data => dispatch(addtocart(data)),
    removeToCartHandler: data => dispatch(removetocart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
