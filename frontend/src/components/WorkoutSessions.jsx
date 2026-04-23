import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Push your limits with expert-designed sessions built for real results.
          Train harder, recover smarter, and transform your body every week.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Intense bootcamp programs designed to burn fat and build strength fast.
          Join a community that trains hard and never skips leg day together.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Morning Power Bootcamp — Full Body Strength & Conditioning.</h4>
            <p>
              A high-intensity morning session combining weights and cardio drills.
              Perfect for building endurance and burning maximum calories daily.
            </p>
          </div>
          <div>
            <h4>Core Crusher — Abs, Stability & Functional Movement Training.</h4>
            <p>
              Target your core with focused planks, rotations, and stability work.
              Build a stronger foundation for every lift and athletic movement.
            </p>
          </div>
          <div>
            <h4>HIIT Inferno — High Intensity Intervals for Fat Loss Goals.</h4>
            <p>
              Short bursts of maximum effort followed by active recovery periods.
              Torch calories fast and keep your metabolism elevated all day.
            </p>
          </div>
          <div>
            <h4>Weekend Warrior — Endurance, Agility & Total Body Challenge.</h4>
            <p>
              End your week strong with this demanding full-body endurance session.
              Designed for athletes who want to push past their comfort zone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
