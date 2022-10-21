import FirstLine from "./FirstLine";

function Letters({ firstLineData }) {
  return (
    <div className="lettersContainer">
      <FirstLine firstLineData={firstLineData} />
      <div className="secondLineContainer">
        <span className="secondLineLetter">A </span>
        <span className="secondLineLetter">W</span>
        <span className="secondLineLetter">e</span>
        <span className="secondLineLetter">b </span>
        <div className="border"></div>
        <div className="specialContainer">
          <span className="secondLineLetter developer">Developer </span>
          <span className="secondLineLetter designer">Designer</span>
        </div>
      </div>
    </div>
  );
}

export default Letters;
