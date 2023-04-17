// Head metadata compoennt
import Head from 'next/head';

export default function HTMLHead() {
  return (
    <Head>
      <title>Ultra Alliance</title>
      <meta
        name="description"
        content="A sick team of open-source developers working together to 
        elavate the Ultra Blockchain."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/uta-logo-purple.png" />
    </Head>
  );
}
