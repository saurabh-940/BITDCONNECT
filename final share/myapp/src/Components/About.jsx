import React from "react";
import logo from "./assests/finallogo.png";
import "../Style/About.scss";

export default function About() {
  return (
    <div className="container">
      <header>
        <img className="logo" src={logo} alt="" />
        <section>
          <h3>Our Logo</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            quisquam officia similique eius recusandae, optio possimus sunt
            iusto cumque numquam quo atque assumenda quibusdam accusamus
            dignissimos fugiat. Nisi ex debitis aut sequi necessitatibus, ullam
            commodi voluptatem exercitationem facilis eos. Quos quibusdam dolore
            sequi accusantium saepe exercitationem voluptatem perferendis unde
            optio!
          </p>
        </section>
      </header>
      <main>
        <div className="names">
          <h5>Saurabh Verma</h5>
          <h5>Umesh Sahu</h5>
          <h5></h5>
        </div>
      </main>
    </div>
  );
}
