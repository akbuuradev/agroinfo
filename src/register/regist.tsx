// import React, from "react";
import Registers from "./registers/registers";
import Logins from "./login/logins";
import {useState} from "react"


const regist = ({open, setOpen, setClose, post, setPost, setSend, send }: any) => {
  return (
    <div>
      {open ? (
        <Registers
          setOpen={setOpen}
          setClose={setClose}
          post={post}
          setPost={setPost}
          setSend={setSend}
          send={send}
        />
      ) : (
        <Logins setOpen={setOpen} setClose={setClose} />
      )}
    </div>
  );
};

export default regist;
