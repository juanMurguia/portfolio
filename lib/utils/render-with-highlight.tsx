export function renderWithHighlight(
  text: string,
  highlightClass = "",
  highlightColor: string,
  textColor: string
) {
  const parts = text.split(/(<highlight>.*?<\/highlight>)/g);
  return parts.map((part, i) => {
    if (part.startsWith("<highlight>") && part.endsWith("</highlight>")) {
      const content = part.replace(/<\/?highlight>/g, "");
      return (
        <span
          key={i}
          className={highlightClass}
          style={{
            background: highlightColor,
            color: textColor,
            padding: "0em 0.2em",
            borderRadius: "0.1em",
          }}
        >
          {content}
        </span>
      );
    }
    return part;
  });
}
