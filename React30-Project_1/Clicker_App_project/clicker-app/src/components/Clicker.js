import React from 'react'
import { useState } from 'react'
export const Clicker = () => {
    const [clickerValue, updateClickerValue] = useState(0);
  return (
   <div className="container">
      <div className="clickerParent border border-secondary rounded mt-4">
        <div className="clickerDisplay d-flex align-items-center justify-content-center bg-light display-2">
          {clickerValue}
        </div>
        <div className="clickerButtonContainer d-flex flex-row">
          <button
            className="btn increase"
            onClick={() => updateClickerValue(clickerValue + 1)}
          >
            <i className="fa fa-2x fa-plus" />
          </button>
          <button
            className="btn reset"
            onClick={() => updateClickerValue(0)}
          >
            <i className="fa fa-2x fa-refresh" />
          </button>
          <button
            className="btn decrease"
            onClick={() => updateClickerValue(Math.max(0,clickerValue - 1))}
          >
            <i className="fa fa-2x fa-minus" />
          </button>
        </div>
      </div>
    </div>
  )
}
