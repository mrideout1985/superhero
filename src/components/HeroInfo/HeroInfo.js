import React from 'react'
// import useHeros from "../../hooks/useHeros"
import { useParams } from 'react-router-dom'
import  useHero  from '../../hooks/useHero'
import styles from './HeroInfo.module.scss'


 export default function HeroInfo(){

    let {id} = useParams()
    const hero = useHero(id)
    

    return (
        <div className={styles["container__hero"]}>
            <img src={hero?.image?.url !== undefined 
            ? hero?.image?.url : 'no img'} />
            <h1>{hero?.name}</h1>
            {/* <h2>{`Int: ${hero?.powerstats?.intelligence}`}</h2>
            <h2>{`Str: ${hero?.powerstats?.strength}`}</h2>
            <h2>{`Spd: ${hero?.powerstats?.speed}`}</h2>
            <h2>{`Dur: ${hero?.powerstats?.durability}`}</h2>
            <h2>{`Pow: ${hero?.powerstats?.power}`}</h2> */}


        </div>
        

    )
}
