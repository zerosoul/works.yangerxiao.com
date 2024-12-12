"use client";
import React, { useEffect, useState } from "react";
import "gitalk/dist/gitalk.css";
import GT from "gitalk";

export default function Comments() {
  const [isProd] = useState(process.env.NODE_ENV == "production");
  // const [isProd] = useState(process.env.NODE_ENV == 'development');
  useEffect(() => {
    if (isProd) {
      const language =
        navigator.language === "zh-CN" ? navigator.language : "en";
      const gitalk = new GT({
        clientID: "5a4d6021f3275378ac13",
        clientSecret: "456d708e8bca721232b34624f52b0fdd73762603",
        repo: "yangerxiao.com",
        owner: "zerosoul",
        admin: ["zerosoul"],
        language,
        id: location.pathname, // Ensure uniqueness and length less than 50
        distractionFreeMode: false, // Facebook-like distraction free mode
      });
      gitalk.render("gitalk-container");
    }
  }, [isProd]);
  //   return <div id="gitalk-container" />;
  return isProd ? (
    <div id="gitalk-container" />
  ) : (
    <div className="m-auto my-10 max-w-2xl text-center p-5 border border-gray-200/50">
      开发环境不加载评论组件
    </div>
  );
}
