import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from "@/styles/Home.module.css";
import Pokemons from "./Pokemons";
import client from "@/utils/apollo-client";
import GET_ALL_POKEMONS from "@/queries/getAllPokemons";
import { PokemonPage } from "@/@types/types";
import PageHandler from "./PageHandler";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }: { data: PokemonPage }) {
	console.log(data);
	return (
		<>
			<Head>
				<title>Pokedex - Buyceps</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/logo.svg" />
			</Head>
			<main>
				<PageHandler page={"1"} />
				<Pokemons data={data} />
			</main>
		</>
	);
}

export async function getStaticProps() {
	// Get external data from the file system, API, DB, etc.
	const { data } = await client.query({
		query: GET_ALL_POKEMONS,
		variables: {
			first: 20,
		},
	});

	// The value of the `props` key will be
	//  passed to the `Home` component
	return {
		props: {
			data,
		},
	};
}
