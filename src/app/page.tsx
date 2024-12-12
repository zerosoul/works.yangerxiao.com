// import { Button } from "@nextui-org/react";
import works from "@/works.json";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { MdLink } from "react-icons/md";
const BgPlaceholder = "placeholder.jpg";
export default function Home() {
  return (
    <main className="px-5 py-8 xl:p-8">
      <hgroup className="flex items-center flex-col gap-4 pb-10 text-white">
        <Badge
          // placement="bottom-right"
          classNames={{
            badge: "bg-transparent right-0",
          }}
          showOutline={false}
          content={works.length}
          // isOneChar

          color="warning"
          variant="flat"
        >
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold uppercase">
            Tristan's Works
          </h1>
        </Badge>
        <h2 className="capitalize font-semibold text-lg md:text-xl relative">
          just for fun
        </h2>
      </hgroup>

      <div className="w-fit m-auto grid gap-x-8 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
        {works.map((w) => {
          const { title, intro, link = "", cover = "", github = "" } = w;
          const bgValue = cover.startsWith("http")
            ? `url(${cover})`
            : `url('https://static.nicegoodthings.com/uPic/co-link/${
                cover || BgPlaceholder
              }')`;
          return (
            <Card
              as={Link}
              href={link || github}
              target="_blank"
              radius="sm"
              style={{
                backgroundImage: `${bgValue}`,
              }}
              key={title}
              isHoverable={false}
              isBlurred
              classNames={{
                base: "max-w-80 transition-all hover:scale-110 cursor-pointer 2xl:max-w-96 bg-slate-900 bg-center bg-cover bg-no-repeat aspect-square",
                body: "min-h-40",
                footer: "gap-3",
              }}
            >
              <CardHeader>
                <h2
                  style={{ textShadow: "black 1px 5px 5px" }}
                  className="font-bold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-slate-50"
                >
                  {title}
                </h2>
              </CardHeader>
              <CardBody>
                <p
                  style={{ textShadow: "black 0px 0px 8px" }}
                  className="text-gray-200 text-sm md:text-base"
                >
                  {intro}
                </p>
              </CardBody>
              <CardFooter>
                {link && (
                  <Button
                    className="opacity-70 hover:opacity-100"
                    variant="shadow"
                    color="primary"
                    as={Link}
                    href={link}
                    target="_blank"
                    radius="full"
                    size="sm"
                    startContent={<MdLink className="size-4" />}
                  >
                    Visit
                  </Button>
                )}
                {github && (
                  <Button
                    as={Link}
                    href={github}
                    target="_blank"
                    className="opacity-70 hover:opacity-100"
                    variant="shadow"
                    color="primary"
                    radius="full"
                    size="sm"
                    startContent={<FaGithub className="size-4" />}
                  >
                    Source Code
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
