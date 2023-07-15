import "../styles/shortenLinks.css";
import { useRef, useState, useEffect } from "react";

const ShortenLinks = () => {
  const inputRef = useRef();
  const [originalLink, setOriginalLink] = useState("");
  const [linksArray, setLinksArray] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setOriginalLink(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
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
    navigator.clipboard.writeText(link).then(() => {
      console.log("Link copied to clipboard!");
    });
  };

  useEffect(() => {
    if (originalLink !== "") {
      setError("");
    } else {
      setError("Please Add a link");
      inputRef.current.focus();
    }
  }, [originalLink]);

  return (
    <div>
      <div className="shorten-links">
        <div className="inputs">
          <form onSubmit={handleSubmit}>
            <div>
              {" "}
              <input
                ref={inputRef}
                type="text"
                required
                placeholder="Shorten link here..."
                value={originalLink}
                onChange={handleChange}
                name="input"
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
                  <button onClick={() => handleCopy(link)}>Copy</button>
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
