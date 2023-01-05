import Head from "next/head";

export const HeadPage = () => {
  return (
    <>
      <Head>
        <title>Harry Potter App</title>
        <meta
          name="description"
          content="App Movies and Books of Harry Potter"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};
