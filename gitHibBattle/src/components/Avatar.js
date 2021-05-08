function Avatar(props) {
  if (props.playerData1) {
    return (
      <div className="flex mr-8">
        <img className="w-20" src={props.playerData1.avatar_url} />
        <p className="mx-5">{props.playerData1.name}</p>
        <button
          className="text-red-600"
          onClick={() => props.handleClear("playerData1")}
        >
          X
        </button>
      </div>
    );
  } else if (props.playerData2) {
    return (
      <div className="flex mr-8">
        <img className="w-20" src={props.playerData2.avatar_url} />
        <p className="mx-5">{props.playerData2.name}</p>
        <button
          className="text-red-600"
          onClick={() => props.handleClear("playerData2")}
        >
          X
        </button>
      </div>
    );
  }
}

export default Avatar;
