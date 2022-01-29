export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px blue",
    borderRadius: "20px",
    padding: "8px",
    margin: "12px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: "0px",
    color: "green"
  };
  const buttonStyle = {
    backgroundColor: "pink",
    border: "none",
    padding: "10px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>-InlineStyle-</p>
      <button style={buttonStyle}>NEVER</button>
    </div>
  );
};
