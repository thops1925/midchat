import Head from 'next/head';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
// import Cookies from 'universal-cookie ';
import { ChannelContainer, ChannelListContainer } from '../components';

const client = StreamChat.getInstance(process.env.api_key);

export default function Home() {
  return (
    <div className="flex w-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
}
