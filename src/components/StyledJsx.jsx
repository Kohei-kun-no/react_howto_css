export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">-StyledJsx-</p>
        <button className="button">UP</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px blue;
          border-radius: 20px;
          padding: 8px;
          margin: 12px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0px;
          color: orange;
        }
        .button {
          background-color: yellow;
          border: none;
          padding: 10px;
        }
        .button:hover{
          background-color:black;
          color: blanchedalmond;
          cursor: pointer;
          }
        }
      `}</style>
    </>
  );
};
