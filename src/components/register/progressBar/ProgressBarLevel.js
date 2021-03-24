import React from 'react'
import { ProgressBar,Step } from "react-step-progress-bar";
const ProgressBarLevel = (props) => {
    return (
        <div>
            <ProgressBar percent={props.value}>
             <Step>
                {({ accomplished, index }) => (
                   <div
                      className={`indexedStep ${accomplished ? "accomplished" : null}`}
                    >
                     {index + 1}
                     </div>
                 )}
             </Step>
            <Step>
                {({ accomplished, index }) => (
                  <div
                    className={`indexedStep ${accomplished ? "accomplished" : null}`}
                 >
                 {index + 1}
                </div>
                )}
            </Step>
            <Step>
                {({ accomplished, index }) => (
                    <div
                        className={`indexedStep ${accomplished ? "accomplished" : null}`}
                     >
                         {index + 1}
                     </div>
                 )}
            </Step>
            </ProgressBar>
        </div>
    )
}

export default ProgressBarLevel
