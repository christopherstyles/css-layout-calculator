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
                className="text-lg px-6 py-2 bg-slate-300 border-slate-200 rounded-full hover:scale-105 active:scale-100 transition duration-150"
                type="button"
                onClick={() => copyToClipboard(`${result}vw`)}
              >
                Copy to clipboard
              </button>
              <div className="select-all">{result}vw</div>
              <div className="rounded-3xl text-xl bg-slate-50 p-10">
                <ul>
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
