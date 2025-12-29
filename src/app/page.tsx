// import { Button } from "@nextui-org/react";
import works from "@/works.json";
import { Badge } from "@nextui-org/badge";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Chip } from "@nextui-org/chip";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { IoCloudOfflineOutline } from "react-icons/io5";
import { MdLink } from "react-icons/md";
import Comments from "../components/comments";
import ForWork from "../components/for-work";
const BgPlaceholder = "placeholder.jpg";
export default function Home() {
  return (
    <>
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
            const {
              stopped = false,
              title,
              intro,
              link = "",
              cover = "",
              github = "",
              logo = "",
            } = w;
            const bgValue = cover.startsWith("http")
              ? `url(${cover})`
              : `url('https://i.siqi.me/works/${cover || BgPlaceholder}')`;
            const logoValue = logo
              ? logo.startsWith("http")
                ? `${logo}`
                : `https://i.siqi.me/works/${logo || BgPlaceholder}`
              : null;
            const _link = link || github;
            return (
              <Card
                as={_link ? Link : undefined}
                href={_link}
                target="_blank"
                radius="sm"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), ${bgValue}`,
                }}
                key={title}
                isHoverable={false}
                isBlurred
                classNames={{
                  base: "max-w-80 transition-all hover:scale-110 cursor-pointer 2xl:max-w-96 bg-slate-900 bg-center bg-cover bg-no-repeat aspect-square",
                  body: "min-h-40",
                  footer: "gap-3",
                  header: "gap-2 items-center",
                }}
              >
                <CardHeader>
                  {logoValue && (
                    <img className="rounded size-8" src={logoValue} />
                  )}
                  <h2
                    style={{ textShadow: "black 1px 5px 5px" }}
                    className="font-bold text-xl whitespace-nowrap md:text-xl xl:text-2xl 2xl:text-3xl text-slate-50"
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
                  {stopped && (
                    <Chip
                      classNames={{
                        base: "text-white",
                      }}
                      startContent={
                        <IoCloudOfflineOutline className="size-5" />
                      }
                      color="warning"
                    >
                      Unavailable
                    </Chip>
                  )}
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
        <Comments />
      </main>
      <ForWork />
    </>
  );
}
