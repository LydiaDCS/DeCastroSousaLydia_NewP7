import React from "react";
import { useParams } from "react-router";

function Logements() {
  const { logementNumber } = useParams()
  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Logement {logementNumber}</h2>
    </div>
  )
}

export default Logements