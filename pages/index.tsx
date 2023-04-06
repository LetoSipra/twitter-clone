import Feed from "@/components/Feed";
import Login from "@/components/Login";
import SideBar from "@/components/SideBar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Head from "next/head";
import { Session } from "next-auth";
import { Provider } from "next-auth/providers";
import Modal from "@/components/Modal";
import { useRecoilState } from "recoil";
import { modalState } from "@/atoms/modalAtom";
import Widgets from "@/components/Widgets";

interface Props {
  session: Session;
  providers: Provider;
}

export default function Home({ providers }: Props) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session) return <Login providers={providers} />;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type="image/png" sizes="32x32" rel="icon" href="/favicon.png" />
      </Head>
      <main className="mx-auto flex min-h-screen max-w-[1500px] bg-black">
        <SideBar />
        <Feed />
        <Widgets />
        {isOpen && <Modal />}
      </main>
    </>
  );
}

export async function getServerSideProps(context: any) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}
