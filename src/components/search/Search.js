import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useDebounce } from "react-use";
import { useClickAway } from "react-use";
import styles from "./Search.module.scss";
import Axios from "axios";
import useHeros from "../../hooks/useHeros";

export const Search = () => {
	const [input, setInput] = useState("");
	const [search, setSearch] = useState("");
	const heros = useHeros(search);
	const [isOpen, setIsOpen] = useState(false);
	const ref = useRef(null);

	useClickAway(ref, () => {
		console.log("OUTSIDE CLICKED");
		setIsOpen(false);
	});

	const [] = useDebounce(
		() => {
			setSearch(input);
			console.log("debouncing");
		},
		500,
		[input]
	);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		e.preventDefault();
		setInput(e.target.value);
	};

	const heroList = (props) => {
		let results = [];
		if (heros !== undefined) {
			if (Object.keys(props).length > 2) {
				for (let i = 0; i < 5; i++) {
					let entry = Object.values(props)[2];
					results.push(entry[i]);
				}
			}
			return results.map((el, key) => {
				return (
					<Link to={`/hero-info/${el?.id}`}>
						<li key={key}>
							<img src={el?.image.url} />

							<div className={styles["info"]}>
								<div className={styles["hero"]}>{el?.name}</div>
							</div>
						</li>
					</Link>
				);
			});
		}
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			{console.log(heros)}
			<div className={styles.search}>
				<div className={styles.input}>
					<input
						className={styles["input"]}
						id="search"
						type="text"
						value={input}
						autoComplete="off"
						onChange={handleChange}
						onFocus={() => setIsOpen(true)}
					/>
					<ul ref={ref}>{isOpen && heroList(heros)}</ul>
				</div>
			</div>
		</form>
	);
};

export default Search;
