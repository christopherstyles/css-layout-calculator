import { useState } from "react";
import "./App.css";

function App() {
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [roundTo, setRoundTo] = useState<number>(2);
  const [elementWidth, setElementWidth] = useState<number>(0);
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
            />
          </div>
          <div>
            <div>Round To</div>
            <input
              type="number"
              className="px-4 py-2 text-2xl rounded-md"
              onChange={(event) => setRoundTo(Number(event.target.value))}
              value={roundTo}
              tabIndex={1}
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
                tabIndex={2}
              />
            </div>
          </div>
        </div>
        <div className="items-center justify-center flex text-8xl">
          {containerWidth > 0 && elementWidth > 0 ? (
            <div className="select-text">
              {((elementWidth / containerWidth) * 100).toFixed(roundTo)}
            </div>
          ) : (
            <div>0</div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
