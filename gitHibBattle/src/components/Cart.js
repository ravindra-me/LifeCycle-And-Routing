import React from "react";

function Cart(props) {
  return (
    <article className="cart">
      <h2 className="text-center text-2xl mb-4">#{props.index}</h2>
      <div class="font-0 width-40">
        <img src={props.item.owner.avatar_url} alt="" className="img" />
      </div>
      <h3 className="text-center pt-4 text-2xl">
        <a href={props.item.html_url}>{props.item.name}</a>
      </h3>
      <div className="mt-8">
        <p className="text-xl mt-2">
          <i class="lni lni-user"></i>
          <a href={props.item.owner.html_url} className="ml-4">
            {props.item.name}
          </a>
        </p>
        <p className="text-xl mt-2">
          <i class="lni lni-star-filled"></i>
          <span className="ml-4">{props.item.stargazers_count}</span>
        </p>
        <p className="text-xl mt-2">
          <i class="lni lni-git"></i>
          <span className="ml-4">{props.item.forks}</span>
        </p>
        <p className="text-xl mt-2">
          <i class="lni lni-question-circle"></i>
          <span className="ml-4">{props.item.open_issues} open_issues</span>
        </p>
      </div>
    </article>
  );
}

export default Cart;
