import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "@firebase/firestore";
import { getProviders, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import Modal from "../components/Modal";
import Post from "../components/Post";
import { db } from "../firebase";
import Head from "next/head";
import { HiArrowLeft } from "react-icons/hi2";
import Login from "@/components/Login";
import Comment from "@/components/Comment";
import SideBar from "@/components/SideBar";

function PostPage({ providers }: any) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [post, setPost] = useState<any>();
  const [comments, setComments] = useState([]);
  const router = useRouter();
  const { id }: any = router.query;

  useEffect(
    () =>
      onSnapshot(doc(db, "posts", id), (snapshot: any) => {
        setPost(snapshot.data());
      }),
    [db]
  );

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "desc")
        ),
        (snapshot: any) => setComments(snapshot.docs)
      ),
    [db, id]
  );

  if (!session) return <Login providers={providers} />;

  return (
    <div>
      <Head>
        <title>
          {post?.username} on Twitter: "{post?.text}"
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-screen max-w-[1500px] bg-black">
        <SideBar />
        <div className="max-w-2xl flex-grow border-l border-r border-gray-700 sm:ml-[73px] xl:ml-[370px]">
          <div className="sticky top-0 z-50 flex items-center gap-x-4 border-b border-gray-700 bg-black px-1.5 py-2 text-xl font-semibold text-[#d9d9d9]">
            <div
              className="hoverAnimation flex h-9 w-9 items-center justify-center xl:px-0"
              onClick={() => router.push("/")}>
              <HiArrowLeft className="h-5 text-white" />
            </div>
            Tweet
          </div>

          <Post id={id} post={post} postPage />
          {comments.length > 0 && (
            <div className="pb-72">
              {comments.map((comment: any) => (
                <Comment
                  key={comment.id}
                  id={comment.id}
                  comment={comment.data()}
                />
              ))}
            </div>
          )}
        </div>
        {/* <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        /> */}

        {isOpen && <Modal />}
      </main>
    </div>
  );
}

export default PostPage;

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
