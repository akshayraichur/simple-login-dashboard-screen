import PostContainer from "./PostContainer";

interface IPostProps {
  authorName: string;
  profilePicture: string;
  editedTime: string;
  comments: string;
  icon: string;
  isEdited: boolean;
  key: number;
}

const Post = ({ authorName, profilePicture, editedTime, comments, icon, isEdited }: IPostProps) => {
  return (
    <div className="my-4 p-5 rounded-lg border-2 border-zinc-700 bg-zinc-800 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <img className="rounded-full h-14 w-14" src={profilePicture} />
          <div className="pt-2">
            <h4 className="text-sm pb-1">{authorName}</h4>
            <span className="">
              {/*  */}
              <span className="text-zinc-500 text-xs pr-1">{editedTime}</span>
              {isEdited && (
                <span>
                  <span className="pr-1 text-zinc-500">•</span>
                  <span className="text-zinc-500 text-xs">Edited</span>
                </span>
              )}
            </span>
          </div>
        </div>
        <div>
          <button>...</button>
        </div>
      </div>
      <div className="">
        <PostContainer icon={icon}>
          <p className="text-zinc-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae distinctio odio expedita cum quos commodi
            sint illum perspiciatis iste officia fuga magnam quia mollitia quasi esse, repellat temporibus? Nobis,
            provident!
          </p>
        </PostContainer>
      </div>
      <div className="flex items-center gap-2">
        <span>{"♾️"}</span>
        <p className="text-xs text-zinc-500">{comments}</p>
      </div>
    </div>
  );
};

export default Post;
