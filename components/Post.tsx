import { db } from "@/firebase";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { HiDotsHorizontal, HiShare, HiTrash } from "react-icons/hi";
import { IoStatsChart } from "react-icons/io5";
import {
  HiOutlineChatBubbleOvalLeft,
  HiOutlineHeart,
  HiHeart,
} from "react-icons/hi2";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "@/atoms/modalAtom";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { MdOutlineSwitchAccessShortcutAdd } from "react-icons/md";

function Post({ id, post, postPage }: any) {
  const { data: session }: any = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState([]);

  const router = useRouter();

  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot: any) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setLiked(
        likes.findIndex((like: any) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const likePost = async () => {
    if (liked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.name,
      });
    }
  };
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

  return (
    <>
      <div className="flex cursor-pointer border-b border-gray-700 p-3">
        {!postPage && (
          <img
            src={post?.userImg}
            alt="Profile Pic"
            className="mr-4 h-11 w-11 rounded-full"
          />
        )}
        <div className="flex w-full flex-col space-y-2">
          <div className={`flex ${!postPage && "justify-between"}`}>
            {postPage && (
              <img
                src={post?.userImg}
                alt=""
                className="mr-4 h-11 w-11 rounded-full"
              />
            )}
            <div className="text-[#6e767d]  ">
              <div className="group inline-block">
                <h4
                  className={`font-bol text-[15px] text-[#d9d9d9] group-hover:underline sm:text-base ${
                    !postPage && "inline-block"
                  }`}>
                  {post?.username}
                </h4>
                <span
                  className={`text-sm sm:text-[15px] ${!postPage && "ml-1.5"}`}>
                  @{post?.tag}
                </span>
              </div>{" "}
              . <span className="text-sm hover:underline sm:text-[15px]"></span>
              {!postPage && (
                <p className="mt-0.5 text-[15px] text-[#d9d9d9] sm:text-base">
                  {post?.text}
                </p>
              )}
            </div>
            <div className="icon group ml-auto flex-shrink-0">
              <HiDotsHorizontal className="h-5 w-5 text-[#6e767d]" />
            </div>
          </div>
          {postPage && (
            <p className="mt-0.5 text-[15px] text-[#d9d9d9] sm:text-base">
              {post?.text}
            </p>
          )}
          <img
            src={post?.image}
            alt=""
            className="mr-2 max-h-[700px] rounded-2xl object-contain"
          />
          <div
            className={`flex w-10/12 justify-between text-[#6e767d] ${
              postPage && "mx-auto"
            }`}>
            <div
              className="group flex items-center space-x-1"
              onClick={(e) => {
                e.stopPropagation();
                setPostId(id);
                setIsOpen(true);
              }}>
              <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
                <HiOutlineChatBubbleOvalLeft className="h-5 w-5 group-hover:text-[#1d9bf0]" />
              </div>
              {comments.length > 0 && (
                <span className="text-sm group-hover:text-[#1d9bf0]">
                  {comments.length}
                </span>
              )}
            </div>
            {session.user.uid === post?.id ? (
              <div
                className="group flex items-center space-x-1"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteDoc(doc(db, "posts", id));
                  router.push("/");
                }}>
                <div className="icon group-hover:bg-red-600/10">
                  <HiTrash className="h-5 w-5 group-hover:text-red-600" />
                </div>
              </div>
            ) : (
              <div className="group flex items-center space-x-1">
                <div className="icon group-hover:bg-green-500/10">
                  <MdOutlineSwitchAccessShortcutAdd className="h-5 w-5 group-hover:text-green-500" />
                </div>
              </div>
            )}
            <div
              className="group flex items-center space-x-1"
              onClick={(e) => {
                e.stopPropagation();
                likePost();
              }}>
              <div className="icon group-hover:bg-pink-600/10">
                {liked ? (
                  <HiHeart className="h-5 w-5 text-pink-600" />
                ) : (
                  <HiOutlineHeart className="h-5 w-5 group-hover:text-pink-600" />
                )}
              </div>
              {likes.length > 0 && (
                <span
                  className={`text-sm group-hover:text-pink-600 ${
                    liked && "text-pink-600"
                  }`}>
                  {likes.length}
                </span>
              )}
            </div>
            <div className="icon group">
              <IoStatsChart className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            <div className="icon group">
              <HiShare className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
