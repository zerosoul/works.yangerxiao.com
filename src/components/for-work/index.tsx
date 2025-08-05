"use client";
import { Button } from "@nextui-org/button";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import Contacts from "./contacts";
import { useDisclosure } from "@nextui-org/react";
import { ReactTyped } from "react-typed";

const introItems = [
  "一个热爱用代码解决生活问题的技术人",
  "擅长 Web 全栈，从 0 到 1 打造完整产品",
  "10 年技术积累，产品思维 + 工程能力",
];
type Props = {};

const ForWork = ({}: Props) => {
  const { isOpen, onOpenChange, onClose } = useDisclosure();
  return (
    <aside className="fixed bottom-4 left-1/2 -translate-x-1/2">
      <Popover
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"
        showArrow
        backdrop="opaque"
        offset={20}
      >
        <PopoverTrigger>
          <Button variant="shadow" size="lg" radius="full" color="secondary">
            <ReactTyped
              // stopped={isOpen}
              startDelay={20}
              loop
              backSpeed={50}
              typeSpeed={50}
              backDelay={2000}
              strings={[
                "💼 Looking for a full-time job",
                "🎨 正在寻找志同道合的团队",
                "不只是写代码，更专注于解决实际问题",
                ...introItems,
                "期待与你共建有意义有价值的产品✨",
                "点击查看联系方式🖱️",
              ]}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-4 p-4">
            <h3 className="text-2xl font-bold text-primary">
              🎨 正在寻找志同道合的团队
            </h3>
            <p className="text-lg text-slate-500">
              不只是写代码，更专注于解决实际问题
            </p>
            <ul className="flex flex-col gap-3 list-disc list-inside">
              {introItems.map((i) => {
                return <li key={i}>{i}</li>;
              })}
            </ul>
            <div className="rounded-lg bg-primary/10 py-4 px-6 w-full grid grid-cols-2 gap-5 my-5">
              <h4 className="col-span-full text-center text-lg font-bold">
                期待与你共建有意义有价值的产品✨
              </h4>
              <Contacts closePopover={onClose} />
              <span className="col-span-full text-xs text-gray-500 text-center">
                (Click to copy 👆)
              </span>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </aside>
  );
};

export default ForWork;
