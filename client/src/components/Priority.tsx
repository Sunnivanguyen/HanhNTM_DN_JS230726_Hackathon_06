const Priority: React.FC<{
  priority: string;
  setPriority: React.Dispatch<React.SetStateAction<string>>;
}> = ({ priority, setPriority }) => {
  return (
    <div style={{ width: "20rem" }}>
      <label
        htmlFor="priority-select"
        style={{
          marginRight: "0.5rem",
          fontWeight: "bold",
          display: "block",
          fontSize: "1.5rem",
          marginBottom: "0.5rem",
        }}
      >
        Priority
      </label>
      <select
        name="priority"
        id="select-priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
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
      >
        <option value="priority1">Priority 1</option>
        <option value="priority2">Priority 2</option>
        <option value="priority3">Priority 3</option>
      </select>
    </div>
  );
};

export default Priority;
