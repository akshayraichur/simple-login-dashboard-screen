import { useState } from "react";

import Title from "../components/Title";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";
import Modal from "../components/Modal";
import Signup from "../components/Signup";
import Login from "../components/Login";

import { POST_DETAILS } from "../constants";

const Home = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoginActive, setIsLoginActive] = useState(false);
  return (
    <div className={"w-100 h-screen animate-fade"}>
      <div className="flex justify-center h-full w-100  p-2">
        <div className="w-1/2 p-5">
          <Title />

          <div className="cursor-pointer" onClick={() => setIsActive((p) => !p)}>
            <CreatePost />

            {POST_DETAILS.map((item) => (
              <Post {...item} key={item.key} />
            ))}
          </div>
        </div>

        {isActive && (
          <Modal>
            <Signup setIsActive={setIsActive} setIsLoginActive={setIsLoginActive} />
          </Modal>
        )}

        {isLoginActive && (
          <Modal>
            <Login setIsActive={setIsLoginActive} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Home;
