import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home({ movies }) {
    return (
        <>
            <Head>
                <title>Hulu Clone</title>
            </Head>
            <Header />
            <Navbar />
            <Results movies={movies} />
        </>
    );
}

export const getServerSideProps = async (context) => {
    const { genre } = context.query;
    const req = await fetch(
        `https://api.themoviedb.org/3${
            requests[genre]?.url || requests.fetchTrending.url
        }`
    );

    const data = await req.json();
    return {
        props: {
            movies: data.results,
        },
    };
};
