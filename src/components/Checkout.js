import React, {useState, useReducer, useEffect} from 'react'
import { useParams } from 'react-router'

const initialState = {
    house:"",
    street: "",
    town: "",
    postcode: ""
}

const Checkout = () => {
    // const [state, dispatch] = useReducer(reducer, initialState)
    var {id} = useParams()




    return (
        <form>
            {/* <input type="text" onChange={() => }/> */}
        </form>
    )
}

export default Checkout
