import React from "react";
// import useHeros from "../../hooks/useHeros"
import { useParams } from "react-router-dom";
import useHero from "../../hooks/useHero";
import styles from "./HeroInfo.module.scss";

export default function HeroInfo() {
	let { id } = useParams();
	const hero = useHero(id);

	return (
		<div className={styles["hero-page"]}>
			<div
				className={styles["header-container"]}
				style={{
					backgroundImage: `url(${hero?.image?.url})`,
					backgroundSize: "cover",
				}}
			>
				<div className={styles["header"]}>
					<img
						src={
							hero?.image?.url !== undefined
								? hero?.image?.url
								: "no img"
						}
						alt=""
					/>
					<div className={styles["details"]}>
						<ul>
							<div>
								<h1>{hero?.name}</h1>
								<h3>
									Aliases: {`"${hero?.biography.aliases.join(',  ')} " `}
								</h3>
								<div>
									<h3>
										Publisher: {hero?.biography?.publisher}
									</h3>
									<div className={styles["overview"]}>
										asdfasdf
									</div>
								</div>
							</div>
						</ul>
					</div>
				</div>
				//{" "}
				{/* <h2>{`Int: ${hero?.powerstats?.intelligence}`}</h2>
		//     <h2>{`Str: ${hero?.powerstats?.strength}`}</h2>
		//     <h2>{`Spd: ${hero?.powerstats?.speed}`}</h2>
		//     <h2>{`Dur: ${hero?.powerstats?.durability}`}</h2>
		//     <h2>{`Pow: ${hero?.powerstats?.power}`}</h2> */}
				//{" "}
			</div>
			//{" "}
		</div>
	);
}
