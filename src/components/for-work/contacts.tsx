"use client";
import { Button, Tooltip } from "@nextui-org/react";
import { FaWeixin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useCopyToClipboard } from "usehooks-ts";

type Props = {
  closePopover: () => void;
};
const email = `yanggc888@gmail.com`;
const wxId = `yanggc_2013`;
const Contacts = ({ closePopover }: Props) => {
  const [copiedValue, copy] = useCopyToClipboard();
  return (
    <>
      <Button
        onPress={copy.bind(null, email)}
        startContent={<MdEmail className="size-5" />}
        radius="full"
        size="sm"
        color="primary"
        className="text-white"
      >
        {copiedValue == email ? `Email copied!` : `Email`}
      </Button>
      <Tooltip
        classNames={{
          content: "p-1",
        }}
        delay={300}
        placement="top-end"
        content={
          <div className="flex flex-col items-center py-1">
            <img
              className="size-60"
              src="https://i.siqi.me/common/wx.qr.jpg"
              alt="wechat qr image"
            />
            <span>WeChat ID: {wxId}</span>
          </div>
        }
      >
        <Button
          onPress={copy.bind(null, wxId)}
          startContent={<FaWeixin className="size-5" />}
          radius="full"
          size="sm"
          color="success"
          className="text-white"
        >
          {copiedValue == wxId ? `Wechat copied!` : `Wechat`}
        </Button>
      </Tooltip>
    </>
  );
};

export default Contacts;
