import React from "react";
import "./Card.scss";
import HeroInfo from "./HeroInfo";

export default function Card(props) {
	return (
		<div className="card">
			<div className="card__side card__side--front">
				<img
					src={props.img}
					alt="asdf"
					className="card__picture card__picture--1"
				/>

				<h4 className="card__heading">
					<span className="card__heading-span card__heading-span--1">
						{props.name}
					</span>
				</h4>
				<div className="card__details"></div>
			</div>
			<div className="card__side card__side--back card__side--back-1">
				<div className="card__cta">
					<div className="card__hero-stats">
						<div
							className="card__btn"
							href="/"
							onClick={(e) => {
								props.stats(e);
							}}
						>
							Power Stats
						</div>
						<div
							className="card__btn"
							href="/"
							onClick={(e) => {
								props.bio(e);
							}}
						>
							Biography
						</div>
						<div
							className="card__btn"
							href="/"
							onClick={(e) => {
								props.affiliated(e);
							}}
						>
							Allies
						</div>
						<div
							className="card__btn"
							href="/"
							onClick={(e) => {
								props.appearance(e);
							}}
						>
							Appearance
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
