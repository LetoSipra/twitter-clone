import { useRef, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import {
  HiOutlinePhotograph,
  HiOutlineEmojiHappy,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { AiOutlineGif, AiOutlineSchedule } from "react-icons/ai";
import { FaPollH } from "react-icons/fa";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { db, storage } from "../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { useSession } from "next-auth/react";

function Tweet() {
  const [input, setInput] = useState<string>("");
  const [imagefile, setImageFile] = useState(null);
  const filePickRef = useRef<any>(null);
  const [showemoji, setShowEmoji] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { data: session }: any = useSession();

  const sendTweet = async () => {
    if (loading) return;
    setLoading(true);

    const docRef = await addDoc(collection(db, "posts"), {
      id: session.user.uid,
      username: session.user.name,
      userImg: session.user.image,
      tag: session.user.tag,
      text: input,
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `posts/${docRef.id}/image`);

    if (imagefile) {
      await uploadString(imageRef, imagefile, "data_url").then(async () => {
        const downloadUrl = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "posts", docRef.id), {
          image: downloadUrl,
        });
      });
    }
    setLoading(false);
    setInput("");
    setImageFile(null);
    setShowEmoji(false);
  };

  const addImageToTweet = (e: any) => {
    const read = new FileReader();
    if (e.target.files[0]) {
      read.readAsDataURL(e.target.files[0]);
    }
    read.onload = (e: any) => {
      setImageFile(e.target.result);
    };
  };

  return (
    <>
      <div
        className={`flex space-x-3 overflow-y-auto border-b border-gray-700 p-3 ${
          loading && "opacity-60"
        }`}>
        <img
          src={session?.user?.image || ""}
          className="h-12 w-12 cursor-pointer rounded-full"
          alt=""
        />
        <div className="w-full divide-y divide-gray-700">
          <div className={`${imagefile && "pb-7"} ${input && "space-y-2.5"}`}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={2}
              placeholder="Whats happening?"
              className="min-h-[50px] w-full bg-transparent text-lg tracking-wide text-[#d9d9d9] placeholder-gray-500 outline-none  "
            />
            {imagefile && (
              <div className="relative">
                <div
                  className="absolute left-1 top-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#15181c] bg-opacity-75 hover:bg-[#272c26] "
                  onClick={() => setImageFile(null)}>
                  <HiXMark className="h-5 text-white" />
                </div>
                <img
                  src={imagefile}
                  alt=""
                  className="max-h-80 rounded-2xl object-contain"
                />
              </div>
            )}
          </div>
          {!loading && (
            <div className="flex items-center justify-between pt-2.5">
              <div className="flex items-center">
                <div
                  className="icon -scale-x-100"
                  onClick={() => {
                    setShowEmoji(false);
                    filePickRef.current.click();
                  }}>
                  <HiOutlinePhotograph className="h-[22px] w-[22px] text-[#1d9bf0]" />
                  <input
                    type="file"
                    hidden
                    onChange={addImageToTweet}
                    ref={filePickRef}
                  />
                </div>
                <div className="icon">
                  <AiOutlineGif className="h-[22px] w-[22px] text-[#1d9bf0]" />
                </div>
                <div className="icon -scale-y-100">
                  <FaPollH className="h-[22px] w-[22px] text-[#1d9bf0]" />
                </div>
                <div className="icon" onClick={() => setShowEmoji(!showemoji)}>
                  <HiOutlineEmojiHappy className="h-[22px] w-[22px] text-[#1d9bf0]" />
                </div>
                <div className="icon">
                  <AiOutlineSchedule className="h-[22px] w-[22px] text-[#1d9bf0]" />
                </div>
                <div className="icon opacity-50">
                  <HiOutlineLocationMarker className="h-[22px] w-[22px] text-[#1d9bf0]" />
                </div>
                {showemoji && (
                  <div className="absolute -ml-[40px] mt-[465px] max-w-[320px] rounded-[20px]">
                    <Picker
                      data={data}
                      onEmojiSelect={(e: any) => {
                        setInput(input + e.native);
                      }}
                      theme="dark"
                    />
                  </div>
                )}
              </div>
              <button
                className="rounded-full bg-[#1d9bf0] px-4 py-1.5 font-bold text-white shadow-md hover:bg-[#1a8cd8] disabled:cursor-default disabled:opacity-50 disabled:hover:bg-[#1d9bf0]"
                disabled={!input.trim() && !imagefile}
                onClick={sendTweet}>
                Tweet
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Tweet;
