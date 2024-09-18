import { useEffect } from "react";

export default function QModFooter() {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "qmod";
    script.type = "application/javascript";
    script.src = "https://qmod.quotemedia.com/js/qmodLoader.js";
    script.setAttribute("data-qmod-wmid", "101150");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="qmod-attribution">
      <a href="https://www.quotemedia.com/coverage" className="qmf-link">
        Financial Market Data
      </a>{" "}
      copyright © 2020{" "}
      <a href="https://www.quotemedia.com" className="qmf-link">
        QuoteMedia
      </a>
      . Data delayed 15 minutes unless otherwise indicated (view{" "}
      <a
        href="https://www.quotemedia.com/legal/tos/#times"
        className="qmf-link"
      >
        delay times
      </a>{" "}
      for all exchanges). <span className="qmf-rt">RT</span>=Real-Time,{" "}
      <span className="qmf-non-rt">EOD</span>=End of Day,{" "}
      <span className="qmf-non-rt">PD</span>=Previous Day.{" "}
      <a href="https://www.quotemedia.com/coverage" className="qmf-link">
        Market Data
      </a>{" "}
      powered by{" "}
      <a href="https://www.quotemedia.com" className="qmf-link">
        QuoteMedia
      </a>
      . Analyst Ratings by Zacks.{" "}
      <a href="https://www.quotemedia.com/legal/tos/" className="qmf-link">
        Terms of Use
      </a>
      .
      <div className="qmf-logo">
        <a href="https://www.quotemedia.com">
          <img
            src="//www.quotemedia.com/footer/logo.png"
            alt="QuoteMedia logo"
          />
        </a>
      </div>
    </div>
  );
}
