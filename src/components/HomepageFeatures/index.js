import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
	{
		title: "Overview",
		description: (
			<>
				This is the docs site for jsCrate, a JavaScript data structures and
				algorithms library. The docs are succinct, with immediately visible
				content providing examples and usage. For more detailed information
				(theory and implementation details), "details" sections are
				provided.
			</>
		),
	},
	{
		title: "Math API",
		description: (
			<ul>
				<li>Sorting algorithms</li>
			</ul>
		),
	},
	{
		title: "Sort API",
		description: <>Implements common sorting algorithms</>,
	},
	{
		title: "Basic",
		description: <>queue, priority queue, bitset</>,
	},
	{
		title: "Lists",
		description: (
			<>
				singly-linked lists, doubly-linked lists, circular singly-linked
				lists, circular doubly-linked lists.
			</>
		),
	},
	{
		title: "Trees",
		description: <>binary search trees, AVL trees.</>,
	},
	{
		title: "Graphs",
		description: <>simple graphs</>,
	},
];

function Feature({ title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
