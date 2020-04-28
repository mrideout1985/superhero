import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useHero from "../../hooks/useHero";
import styles from "./HeroInfo.module.scss";
import PowerStats from "./PowerStats";
import Biography from "./Biography";
import Appearance from "./Appearance";
import Connections from "./Connections";

export default function HeroInfo() {
	let { id } = useParams();
	const hero = useHero(id);

	const [statsActive, setStatsActive] = useState(false);
	const [bioActive, setBioActive] = useState(false);
	const [appearActive, setAppearActive] = useState(false);
	const [connectionsActive, setConnectionsActive] = useState(false);

	return (
		<div className={styles["hero-page"]}>
			<div
				className={styles["header-container"]}
				style={{
					backgroundImage: `url(${hero?.image?.url})`,
					backgroundSize: "100%",
					backgroundPosition: "center",
				}}
			>
				<div className={styles["header"]}>
					<div className={styles["tabs"]}>
						<div
							className={styles["tab"]}
							onClick={() => {
								setBioActive(true);
								setStatsActive(false);
								setConnectionsActive(false);

								setAppearActive(false);
							}}
						>
							BIOGRAPHY
						</div>
						<div
							className={styles["tab"]}
							onClick={() => {
								setStatsActive(true);
								setBioActive(false);
								setAppearActive(false);
								setConnectionsActive(false);
							}}
						>
							STATS
						</div>
						<div
							className={styles["tab"]}
							onClick={() => {
								setAppearActive(true);
								setStatsActive(false);
								setBioActive(false);
								setConnectionsActive(false);
							}}
						>
							APPEARANCE
						</div>
						<div
							className={styles["tab"]}
							onClick={() => {
								setConnectionsActive(true);
								setAppearActive(false);
								setStatsActive(false);
								setBioActive(false);
							}}
						>
							CONNECTIONS
						</div>
					</div>
					<div className={styles["hero_image"]}>
						<img
							src={
								hero?.image?.url !== undefined
									? hero?.image?.url
									: "no img"
							}
							alt=""
						/>
					</div>
					<div className={styles["details"]}>
						<PowerStats
							className={
								statsActive
									? styles["visible"]
									: styles["hidden"]
							}
							powerStats={hero?.powerstats}
						/>
						<Biography
							className={
								bioActive ? styles["visible"] : styles["hidden"]
							}
							biography={hero?.biography}
						/>

						<Appearance
							className={
								appearActive
									? styles["visible"]
									: styles["hidden"]
							}
							appearance={hero?.appearance}
						/>
						<Connections
							className={
								connectionsActive
									? styles["visible"]
									: styles["hidden"]
							}
							connections={hero?.connections}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
