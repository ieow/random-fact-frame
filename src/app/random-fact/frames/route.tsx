import { Button } from "frames.js/next";
import { frames, randomFactToday } from "../frames";
// const randomColor = require('node-random-color');

const handleRequest = frames(async (ctx) => {
  const fact = await randomFactToday();
  
  return {
    image: (
      <div tw="flex flex-col">
        {/* <div tw="flex">Click the button</div> */}
        <div tw="flex flex m-8 text-center"> {fact.text} </div>
      </div>
    ),
    buttons: [
      <Button action="post" key="1" target="/next-fact">
        Next Fact
      </Button>,
      // <Button action="post" key="1" target="/who-am-i">
      //   Who am I?
      // </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
