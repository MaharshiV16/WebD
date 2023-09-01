import React from "react";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

function Home() {
	// ! Here array is used to represent a unique id to the query
	// * refetch: updateCatFact -> we can change the name of the function so that it was be distinguished
	const {
		data,
		isLoading,
		refetch: updateCatFact,
	} = useQuery(["catFact"], async () => {
		return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
		// ! We are returning the data(res.data here) we get from the Axios api call
	});

	if (isLoading) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<h2>This is Home Page</h2>
			<p>{data?.fact}</p>
			<button onClick={updateCatFact}>Change Fact</button>
		</div>
	);
}

export default Home;
