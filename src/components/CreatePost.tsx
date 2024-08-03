import PostContainer from "./PostContainer";

const CreatePost = () => {
  return (
    <div className="p-5 rounded-lg border-2 border-zinc-700 bg-zinc-800">
      <p className="text-xl">Create post</p>

      <PostContainer icon="💬">
        <input className="w-full bg-transparent outline-none border-none" placeholder="How are you feeling today?" />
      </PostContainer>
      <div className="flex justify-end">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-10 rounded">Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
