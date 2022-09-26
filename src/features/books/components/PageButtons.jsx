const PageButtons = ({ setUrl, pageLinks }) => {
  const buttonText = rel => {
    return rel
      ?.split("=")[1]
      .slice(1, rel.split("=")[1].length - 1)
      .toUpperCase();
  };

  return (
    <div className="flex gap-4 justify-center">
      {pageLinks?.split(",").map(linkIfo => {
        const [url, rel] = linkIfo.split(";");
        return (
          <button
            className="underline underline-offset-4"
            key={url}
            onClick={() => setUrl(url.replace("<", "").replace(">", ""))}
          >
            {buttonText(rel)}
          </button>
        );
      })}
    </div>
  );
};

export { PageButtons };
