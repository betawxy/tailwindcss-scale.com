import Head from "next/head";

export default function Home() {
  return (
    <div className="h-screen bg-green-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>tailwindcss</h1>
      </main>

      <footer>footer</footer>
    </div>
  );
}
