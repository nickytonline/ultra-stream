import { use, Suspense } from "react";
import useAsset from "ultra/hooks/use-asset.js";

const Data = () => {
  const data = use(
    fetch("https://flash-the-slow-api.herokuapp.com/delay/3000").then(
      (data) => {
        return data.json();
      }
    )
  );
  return <div>{data.message}</div>;
};

export default function App() {
  console.log("Hello world!");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
        <link rel="stylesheet" href={useAsset("/style.css")} />
      </head>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <Data />
        </Suspense>
      </body>
    </html>
  );
}
