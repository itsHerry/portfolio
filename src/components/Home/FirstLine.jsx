import FirstLineLetter from "./FirstLineLetter";

function FirstLine({ firstLineData }) {
  return (
    <div className="firstLineContainer">
      {firstLineData.map((letterData) => (
        <FirstLineLetter key={letterData.id} text={letterData.text} />
      ))}
    </div>
  );
}

export default FirstLine;
