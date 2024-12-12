import React from "react";

type Props = {};

const Footer = ({}: Props) => {
  return (
    <footer className="flex flex-col items-center gap-4 text-xs text-gray-500 m-auto py-10">
      <p className="copyright">&copy;2015 - {new Date().getFullYear()}</p>
      <p className="copyright">Created By Tristan With ♥️</p>
    </footer>
  );
};

export default Footer;
