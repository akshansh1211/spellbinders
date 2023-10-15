import React, { useState } from "react";
import '../MeetingRoles.css';
import { NavBar } from './NavBar';



function MeetingRoles() {
  const [showTMOD, setShowTMOD] = useState(false);
  const [showGE, setShowGE] = useState(false);
  const [showGrammarian, setShowGrammarian] = useState(false);
  const [showAhCounter, setShowAhCounter] = useState(false);
  const [showTTM, setShowTTM] = useState(false);
  const [showTimer, setShowTimer] = useState(false);
  const [showSpeaker, setShowSpeaker] = useState(false);
  const [showListener, setShowListener] = useState(false);
  const [showJokeMaster, setShowJokeMaster] = useState(false);
  const [showSAA, setShowSAA] = useState(false);

  const tmodDescription =
    "The TMOD is essentially the host of the Toastmasters meeting.  The TMOD selects a theme for the meeting, which serves as a unifying topic or concept for the meeting's activities. Throughout the meeting, the TMOD plays a pivotal role in maintaining the schedule and ensuring that the meeting stays on track, adhering to the assigned time for each segment.";
  const geDescription =
    "The General Evaluator (GE) plays a crucial role in the smooth and constructive functioning of a Toastmasters meeting. Their primary responsibility is to evaluate the overall meeting, assessing its effectiveness and success in achieving its objectives. They serve as the key figure responsible for providing feedback to various meeting participants, ensuring that they receive valuable insights to aid in their development.";
  const grammarianDescription =
    "The Grammarian is responsible for promoting good grammar and language usage within the Toastmasters meeting. They play a key role in helping members improve their speaking and language skills. Many Grammarians introduce a Word of the Day at the start of the meeting, encouraging participants to incorporate it into their speeches and conversations to expand their vocabulary.";
  const AhCounterDescription =
    "The Ah-Counter is responsible for monitoring and counting filler words such as um, uh, like etc. used by speakers during their presentations. This role serves to help participants become more aware of their speech habits and improve their communication skills. ";
  const TTMDescription =
    "In a Toastmasters meeting, the Table Topics Master is responsible for organizing and leading the Table Topics session, a segment where participants practice impromptu speaking. The Table Topics Master introduces themselves, sets the session's theme if applicable, and explains the rules. Prior to the meeting, they prepare a series of open-ended questions or topics suitable for 1-2 minute responses.";
  const TimerDescription =
    "In a Toastmasters meeting, the Timer plays a vital role in ensuring that the meeting runs smoothly and that speakers adhere to their allotted time limits. The Timer introduces themselves at the beginning of the meeting and explains the timing system. They typically use colored signal cards, such as green, yellow, and red, to indicate to speakers how much time they have left during their speeches. ";
  const SpeakerDescription =
    "The Prepared Speaker is a central role in Toastmasters meetings, responsible for delivering a prepared speech. Prepared speeches are usually assigned a specific time limit e.g., 5-7 minutes, and the speaker must adhere to that time constraint.";
  const ListenerDescription =
    "In a Toastmasters meeting, a Listener is an active participant who plays a critical role in the meeting's success. Listeners are encouraged to pay close attention to the speeches and evaluations delivered during the meeting. ";
  const JokeMasterDescription =
    "A Jokemaster, while not an official role in Toastmasters, is often a lighthearted and informal role that some clubs incorporate to add humor and entertainment to their meetings. The Jokemaster's primary responsibility is to inject humor into the meeting and lighten the atmosphere. ";
  const SAADescription =
    "The Sergeant at Arms (SAA) in a Toastmasters meeting fulfills an essential role related to the physical setup and logistics of the meeting. Their responsibilities begin with setting up the meeting room before it commences. Their role is integral in ensuring that the meeting runs smoothly and creates a welcoming atmosphere for all participants.";

  return (
    <>
    <NavBar/>
    <div className="meeting-roles-container" style={{ width: "100vw", height: "100vw", paddingTop:"90px" }}>
      <h1>Meeting Roles</h1>
      <button
        className="btn btn-secondary btn-block"
        style={{ width: "100%" }}
        onClick={() => setShowTMOD(!showTMOD)}
      >
        TMOD (Toastmaster of the Day)
      </button>
      {showTMOD && (
        <div className="mt-3">
          <h2>TMOD (Toastmaster of the Day) <br /><span>Mentored by: TM Akshansh</span></h2>
          <p>{tmodDescription}</p>
        </div>
      )}
      <button
        className="btn btn-secondary btn-block"
        style={{ width: "100%" }}
        onClick={() => setShowGE(!showGE)}
      >
        GE (General Evaluator)
      </button>
      {showGE && (
        <div className="mt-3">
          <h2>GE (General Evaluator) <br /><span>Mentored by: TM Akshansh</span></h2>
          <p>{geDescription}</p>
        </div>
      )}
      <button
        className="btn btn-secondary btn-block"
        style={{ width: "100%" }}
        onClick={() => setShowGrammarian(!showGrammarian)}
      >
        Grammarian
      </button>
      {showGrammarian && (
        <div className="mt-3">
          <h2>Grammarian  <br /><span>Mentored by: TM Akshansh</span></h2>
          <p>{grammarianDescription}</p>
        </div>
      )}

      <button
        className="btn btn-secondary btn-block"
        style={{ width: "100%" }}
        onClick={() => setShowAhCounter(!showAhCounter)}
      >
        Ah-Counter
      </button>
      {showAhCounter && (
        <div className="mt-3">
          <h2>Ah-Counter <br /><span>Mentored by: TM Siddhi</span></h2>
          <p>{AhCounterDescription}</p>
        </div>
      )}

      <button
        className="btn btn-secondary btn-block"
        style={{ width: "100%" }}
        onClick={() => setShowTTM(!showTTM)}
      >
        TTM
      </button>
      {showTTM && (
        <div className="mt-3">
          <h2>TTM <br /><span>Mentored by: TM Namrata</span></h2>
          <p>{TTMDescription}</p>
        </div>
      )}

<button
        className="btn btn-secondary btn-block"
        style={{ width: "100%" }}
        onClick={() => setShowSpeaker(!showSpeaker)}
      >
        Speaker
      </button>
      {showSpeaker && (
        <div className="mt-3">
          <h2>Speaker  <br /><span>Mentored by their respective mentors</span></h2>
          <p>{SpeakerDescription}</p>
        </div>
      )}

<button
        className="btn btn-secondary btn-block"
        style={{ width: "100%" }}
        onClick={() => setShowTimer(!showTimer)}
      >
        Timer
      </button>
      {showTimer && (
        <div className="mt-3">
          <h2>Timer  <br /><span>Mentored by: TM Payal</span></h2>
          <p>{TimerDescription}</p>
        </div>
      )}

<button
        className="btn btn-secondary btn-block"
        style={{ width: "100%" }}
        onClick={() => setShowListener(!showListener)}
      >
        Listener
      </button>
      {showListener && (
        <div className="mt-3">
          <h2>Listener  <br /><span>Mentored by: TM Payal</span></h2>
          <p>{ListenerDescription}</p>
        </div>
      )}

<button
        className="btn btn-secondary btn-block"
        style={{ width: "100%" }}
        onClick={() => setShowJokeMaster(!showJokeMaster)}
      >
       Joke Master
      </button>
      {showJokeMaster && (
        <div className="mt-3">
          <h2>Joke Master  <br /><span>Mentored by: TM Pranav</span></h2>
          <p>{JokeMasterDescription}</p>
        </div>
      )}

<button
        className="btn btn-secondary btn-block"
        style={{ width: "100%" }}
        onClick={() => setShowSAA(!showSAA)}
      >
       SAA
      </button>
      {showSAA && (
        <div className="mt-3">
          <h2>SAA  <br /><span>Mentored by: TM Jai</span></h2>
          <p>{SAADescription}</p>
        </div>
      )}

    </div>
    
    </>
  );
}

export default MeetingRoles;
