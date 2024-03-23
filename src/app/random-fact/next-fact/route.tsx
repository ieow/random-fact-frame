import { Button } from "frames.js/next";
import { frames, randomFact } from "../frames";

const handleRequest = frames(async (ctx) => {

  const pageIndex = Number(ctx.searchParams.pageIndex || 0);
  const fact = await randomFact();
  return {
    image: (
      <div tw="flex flex-col p-6">
        <div tw="flex m-8 text-center"> {fact.text} </div>
      </div>
    ),
    buttons: [
      <Button
        key = "1"
        action="post"
        target={{
          pathname: "/next-fact",
          query: { pageIndex: (pageIndex - 1) },
        }}
      >
        Next Fact
      </Button>,
      <Button action="post" key="2" target="/">
        Fact of the Day
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
