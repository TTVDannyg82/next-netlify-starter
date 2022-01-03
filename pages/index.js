import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Dannyg82 innit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my website! My name is kye and i hope you enjoy it here!" />
        <p className="description">
    Discord: Dannyg82#6969</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
