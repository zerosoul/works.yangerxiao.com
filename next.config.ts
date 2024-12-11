import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/breathe-relaxer",
        destination: "https://sinqi.tools/breathe_relaxer",
        basePath: false,
        permanent: true,
      },
      {
        source: "/tech-logo-memo-game",
        destination: "https://logo-game.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/icfe",
        destination: "https://icfe.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/life-progress",
        destination: "https://life-pro.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/swordman-music-list",
        destination: "https://swordman-musics.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/github-social-image-generator",
        destination: "https://github-og-gen.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/css-arrow-generator",
        destination: "https://css-arrow-gen.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/oh-my-goal",
        destination: "https://omg.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/mini-stopwatch",
        destination: "https://mini-stop.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/strong-password-generator",
        destination: "https://pwd-gen.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/html-color-cheatsheet",
        destination: "https://html-colors.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/react-h5",
        destination: "https://h5-demo2.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/react-meeting-h5",
        destination: "https://h5-demo1.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/fsu",
        destination: "https://sinqi.tools/fsu",
        basePath: false,
        permanent: true,
      },
      {
        source: "/do-the-five",
        destination: "https://do-the-five.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/chwg",
        destination: "https://chwg.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      {
        source: "/honeyed-words-generator",
        destination: "https://honey.yangerxiao.com",
        basePath: false,
        permanent: true,
      },
      // {
      //   source: "/xxx",
      //   destination: "https://xxx.yangerxiao.com",
      //   basePath: false,
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
