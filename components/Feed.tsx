import { db } from "@/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import Post from "./Post";
import Tweet from "./Tweet";

function Feed() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );
  return (
    <>
      <div className="max-w-2xl flex-grow border-l border-r border-gray-700 text-white sm:ml-[73px] xl:ml-[370px] ">
        <div className="sticky top-0 z-50 flex items-center border-b border-gray-700 bg-black px-3 py-2 text-[#d9d9d9] sm:justify-between ">
          <h2 className="text-lg font-bold sm:text-xl ">Home</h2>
          <div className="hoverAnimation ml-auto flex h-9 w-9 items-center justify-center xl:px-0 ">
            #
          </div>
        </div>
        <Tweet />
        <div className="pb-72">
          {posts.map((post: any) => (
            <Post key={post.id} id={post.id} post={post.data()} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Feed;
