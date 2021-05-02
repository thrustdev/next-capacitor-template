import Head from 'next/head'
import tw from 'twin.macro'

const Hero = tw.div`
  flex
  justify-center
  items-center
  h-screen
`

const Title = tw.h1`
  font-black
  text-6xl
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thrust</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <Title>
          Thrust Studio
        </Title>
      </Hero>
    </div>
  )
}
