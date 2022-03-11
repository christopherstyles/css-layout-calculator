import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [roundTo, setRoundTo] = useState<number>(2);
  const [elementWidth, setElementWidth] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  useEffect(() => {
    if (containerWidth > 0 && elementWidth > 0) {
      setResult(
        Number(((elementWidth / containerWidth) * 100).toFixed(roundTo)),
      );
    } else {
      setResult(0);
    }
  }, [containerWidth, elementWidth, roundTo]);

  useEffect(() => {
    const params = new URLSearchParams(document.location.search.substring(1));

    const containerWidthFromParams = params.has("container-width")
      ? params.get("container-width")
      : null;
    if (containerWidthFromParams) {
      setContainerWidth(Number(containerWidthFromParams));
    }

    const roundToFromParams = params.has("round-to")
      ? params.get("round-to")
      : null;
    if (roundToFromParams) {
      setRoundTo(Number(roundToFromParams));
    }

    const elementWidthFromParams = params.has("element-width")
      ? params.get("element-width")
      : null;
    if (elementWidthFromParams) {
      setElementWidth(Number(elementWidthFromParams));
    }
  }, []);

  const copyToClipboard = (contents: string | number) => {
    const str = String(contents);
    navigator.clipboard
      .writeText(str)
      .then(() => {
        console.log(`"${str}" was copied to clipboard.`);
      })
      .catch((err) => {
        console.error(`Error copying text to clipboard: ${err}`);
      });
  };

  return (
    <main className="bg-slate-400 text-slate-800 min-h-screen flex items-center justify-center">
      <div className="space-y-10">
        <div className="flex gap-6">
          <div>
            <div>Container Width</div>
            <input
              type="number"
              className="px-4 py-2 text-2xl rounded-md"
              onChange={(event) =>
                setContainerWidth(Number(event.target.value))
              }
              value={containerWidth}
              tabIndex={0}
              autoFocus
              onFocus={(event) => event.target.select()}
            />
          </div>
          <div>
            <div>Round To</div>
            <input
              type="number"
              className="px-4 py-2 text-2xl rounded-md"
              onChange={(event) => setRoundTo(Number(event.target.value))}
              value={roundTo}
              size={4}
            />
          </div>
          <div>
            <div>Element Width:</div>
            <div>
              <input
                type="number"
                className="px-4 py-2 text-2xl rounded-md"
                onChange={(event) =>
                  setElementWidth(Number(event.target.value))
                }
                value={elementWidth}
              />
            </div>
          </div>
        </div>
        <div className="items-center justify-center flex text-8xl">
          {result > 0 ? (
            <div className="space-y-6 flex flex-col items-center">
              <button
                className="text-lg text-slate-600 hover:text-slate-800 hover:shadow flex items-center space-x-2 whitespace-nowrap px-6 py-2 bg-slate-300 border-slate-200 rounded-full hover:scale-105 active:scale-100 transition duration-150-500"
                type="button"
                onClick={() => copyToClipboard(`${result}vw`)}
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                    />
                  </svg>
                </div>
                <div>Copy to clipboard</div>
              </button>
              <div className="select-all">{result}vw</div>
              <div className="rounded-3xl overflow-hidden text-xl bg-slate-50">
                <div className="text-xs uppercase bg-slate-200 text-slate-400 text-center py-2">
                  Tailwind Helpers
                </div>
                <ul className="px-10 py-6">
                  <li>
                    <code className="select-all">w-[{result}vw]</code>
                  </li>
                  <li>
                    <code className="select-all">t-[{result}vw]</code>
                  </li>
                  <li>
                    <code className="select-all">r-[{result}vw]</code>
                  </li>
                  <li>
                    <code className="select-all">b-[{result}vw]</code>
                  </li>
                  <li>
                    <code className="select-all">l-[{result}vw]</code>
                  </li>
                  <li>
                    <code className="select-all">l-[{result}vw]</code>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>-</div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
