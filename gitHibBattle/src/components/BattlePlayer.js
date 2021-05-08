export default function BattlePlayer(props) {
  return (
    <div className="flex justify-evenly items-center mt-8">
      <article className="border-2 border-indigo-600 p-8 rounded-2xl	">
        <h2 className="text-2xl text-center mb-4">{`${
          props.player1.public_repos > props.player2.public_repos
            ? "Winner"
            : "Losser"
        }`}</h2>
        <div class="font-0">
          <img src={props.player1.avatar_url} alt="" class="img2" />
        </div>
        <p className="red">Score: 33</p>
        <div className="mt-4">
          <p>{props.player1.name}</p>
          <p>{props.player1.location}</p>
          <p>{props.player1.company}</p>
          <p>{props.player1.followers} followers</p>
          <p>{props.player1.following} following</p>
          <p>{props.player1.public_repos} repositories</p>
        </div>
      </article>
      <article className="border-2 border-indigo-600 p-8 rounded-2xl	">
        <h2 className="text-2xl text-center mb-4">{`${
          props.player2.public_repos > props.player1.public_repos
            ? "Winner"
            : "Losser"
        }`}</h2>
        <div class="font-0">
          <img src={props.player2.avatar_url} alt="" class="img2" />
        </div>
        <p className="red">Score: 33</p>
        <div className="mt-4">
          <p>{props.player2.name}</p>
          <p>{props.player2.location}</p>
          <p>{props.player2.company}</p>
          <p>{props.player2.followers} followers</p>
          <p>{props.player2.following} following</p>
          <p>{props.player2.public_repos} repositories</p>
        </div>
      </article>
    </div>
  );
}
