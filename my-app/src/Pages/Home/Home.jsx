import React from "react";
import PassionCard from "../../components/PassionCard/PassionCard";
import { my_passions } from "../../data/passions";

function Home() {

    return (

        <div>

            {my_passions.map((pass) => {


               return <PassionCard passion={pass} />


            })}

        </div>
    )
}

export default Home