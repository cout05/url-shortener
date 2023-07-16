import "../styles/shortenLinks.css";
import { useRef, useState, useEffect } from "react";

const ShortenLinks = () => {
  const [originalLink, setOriginalLink] = useState("");
  const [linksArray, setLinksArray] = useState([]);
  const [error, setError] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [isButtonClick, setIsButtonClick] = useState(false);

  const handleChange = (event) => {
    setOriginalLink(event.target.value);
  };

  const handleClick = () => {
    setIsClick(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (originalLink === "") {
      setIsClick(true);
    }

    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${originalLink}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({ originalLink }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      setLinksArray([...linksArray, data.result.full_short_link]);
    } else {
      console.error("Failed to shorten the link");
    }
  };

  const handleCopy = (link) => {
    setIsButtonClick(true);
    navigator.clipboard.writeText(link).then(() => {
      console.log("Link copied to clipboard!");
    });
  };

  useEffect(() => {
    if (isClick) {
      if (originalLink === "") {
        setError("Please add a link");
      } else {
        setError("");
      }
    }
  }, [originalLink, isClick]);

  return (
    <div>
      <div className="shorten-links">
        <div className="inputs">
          <form onSubmit={handleSubmit}>
            <div>
              {" "}
              <input
                type="text"
                required
                placeholder="Shorten link here..."
                value={originalLink}
                onChange={handleChange}
                onClick={handleClick}
                name="input"
                className={error ? "empty" : null}
              />
              <button type="submit">Shorten It!</button>
            </div>
            {error ? <p className="error-text">{error}</p> : null}
          </form>
        </div>

        <div className="outputs">
          {linksArray.map((link, index) => {
            return (
              <div className="link-con" key={index}>
                <div>
                  <p>{originalLink}</p>
                </div>
                <div className="line"></div>
                <div>
                  <a href={link}>{link}</a>
                  <button
                    className={isButtonClick ? "clicked" : null}
                    onClick={() => handleCopy(link)}>
                    {isButtonClick ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ShortenLinks;
