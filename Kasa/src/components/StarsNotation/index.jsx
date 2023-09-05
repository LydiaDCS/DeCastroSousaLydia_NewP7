import React from "react"


function StarNotation({ noteValue, noteType }) {
  const range = [1, 2, 3, 4, 5]

  const moodStar = noteType === 'light' ? '☀️' : '💧'

  return (
    <div>
      {range.map((rangeElem) =>
        noteValue >= rangeElem ? <span key={rangeElem.toString()}>{moodStar}</span> : null
      )}

    </div>
  )
}
export default StarNotation