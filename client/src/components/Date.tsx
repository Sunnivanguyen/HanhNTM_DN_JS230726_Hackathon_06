import React from "react";

const Date: React.FC<{
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string>>;
}> = ({ date, setDate }) => {
  return (
    <div style={{ width: "20rem" }}>
      <label
        htmlFor="date"
        style={{
          marginRight: "0.5rem",
          fontWeight: "bold",
          display: "block",
          fontSize: "1.5rem",
          marginBottom: "0.5rem",
        }}
      >
        Date
      </label>
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
        id="date"
        style={{
          display: "block",
          width: "100%",
          font: "inherit",
          fontSize: "1.5rem",
          padding: "0.5rem",
          borderRadius: "4px",
          backgroundColor: "#f7f5ef",
          border: "none",
          borderBottom: "2px solid #494844",
          borderBottomRightRadius: "0",
          borderBottomLeftRadius: "0",
          marginBottom: "0.5rem",
        }}
      />
    </div>
  );
};

export default Date;
