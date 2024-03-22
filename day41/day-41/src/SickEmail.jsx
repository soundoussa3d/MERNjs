//import React from 'react'

function SickEmail() {
    const name="Soundous";

    function value() {
        return 2;
    }

    function p1() {
        return (
        <p className="p1">
        I wanted to let you know as soon as possible that I will be staying home from work today.
        </p>
        )
    }

    function p2() {
        return (
        <p className="p2" >
        Unfortunately, I developed a stomach bug that has made it very difficult to get work done.
        </p>
        )
    }

    function p3() {
        return (
        <p className="p3">
        I went to urgent care last night and was told it should subside within <b>{value()}</b>  hours. I do not expect to be online throughout the day.
        </p>
        )
    }

    function p4() {
        return (
        <p className="p4">
        While I do plan to be back in the office tomorrow, I ve asked Kelly to take over for me today in case any emergencies arise. I had an important call scheduled with a supplier, but Daniel has agreed to manage the meeting.
        </p>
        )
    }

    function p5() {
        return (
        <p className="p5">
        Please let me know of any additional steps you d like me to take to ensure the day runs as smoothly as possible in my absence.
        </p>
        )
    }
  return (
    <div id="main">
        <h3 id="h3">
            Hi <b>{name}</b>
        </h3>
        {p1()}
        {p2()}
        {p3()}
        {p4()}
        {p5()}
        Thank you, <br />
        <b>{name}</b>
        
    </div>
  )
}

export default SickEmail