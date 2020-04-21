import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function useHeros(props){
    const [state, setState] = useState()

    useEffect(() => {
        Axios.get(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/666612187525447/search/${props}`)
            .then((res) => {
                setState(res.data)
            })
            .catch(() => {
                console.log('Error')
            })
        const cleanup = () => {
            setState()
        }

        return cleanup
    }, [props])

    return state
}
