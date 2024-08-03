interface IPostContainerProps {
  children: React.ReactNode;
  icon: string;
}

const PostContainer = ({ children, icon }: IPostContainerProps) => {
  return (
    <div className="flex items-center gap-5 bg-zinc-900 rounded-lg p-3 my-3">
      <div className="rounded-full bg-zinc-700 p-3 h-10 w-10 flex justify-center items-center">
        <span>{icon}</span>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default PostContainer;
