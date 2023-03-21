import React from 'react';
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { useState } from 'react';
import "./CalendarPage.css";

function Calendar() {
  const [ start, setStart ] = useState(new Date());
  const [ end, setEnd ] = useState(new Date());
  const [boolCallCal, setBoolCallCal] = React.useState(false);
  const [ eventName, setEventName ] = useState("");
  const [ eventDescription, setEventDescription ] = useState("");  
  const sessioncal = useSession(); // tokens, when session exists we have a user
  const supabase = useSupabaseClient(); // talk to supabase
  const { isLoading } = useSessionContext();
 
  if(isLoading) {
    return <></>
  }

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        scopes: 'https://www.googleapis.com/auth/calendar'		 
      }	  	  
    } 	
	);
    if(error) {
      alert("Error logging in to Google provider with Supabase");
      console.log(error);
    }	
  }
  
  async function signOut() {
    await supabase.auth.signOut();
  } 

  async function createCalendarEvent() {
    console.log("Creating calendar event");
    const event = {
      'summary': eventName,
      'description': eventDescription,
      'start': {
        'dateTime': start.toISOString(), // Date.toISOString() ->
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
      },
      'end': {
        'dateTime': end.toISOString(), // Date.toISOString() ->
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone // America/Los_Angeles
      }
    }
    await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
      method: "POST",
      headers: {
        'Authorization':'Bearer ' + sessioncal.provider_token // Access token for google
      },
      body: JSON.stringify(event)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      alert("Event created, check your Google Calendar!");
    });
  }

  console.log(sessioncal);
  console.log(start);
  console.log(eventName);
  console.log(eventDescription);
  console.log(boolCallCal);
  return (
   
      <div style={{marginLeft:"-210px", textAlign:"center", backgroundColor:"#191F45", color:"white", alignItems: "center", fontSize:10, fontFamily: 'Segoe UI'}}>
        {sessioncal ?
          <> <div className="calfloat">
	
          <div><strong>Job Dispatch</strong></div>
				  <div  id="divCall"  style={{ display:boolCallCal ? "block" : "none" }}  >           

            <div style={{height:"6px"}}>Start of event</div>
            <div style={{backgroundColor:"white",color:"black", height:"20px"}}><Datetime inputProps={{className:'datetime'}} onChange={setStart} value={start} /></div>
            {/* <br/> */}
            <div style={{height:"6px"}}>End of event</div>
            <div style={{backgroundColor:"white",color:"black", height:"20px"}}><Datetime inputProps={{className:'datetime'}} onChange={setEnd} value={end} /></div>
            {/* <br/> */}
            <div style={{height:"6px"}}>Event name</div>
            <input type="text" onChange={(e) => setEventName(e.target.value)} style={{height:"8px", marginBottom:"0px"}}/>

            <div style={{height:"6px"}}>Event description</div>
            <input type="text" onChange={(e) => setEventDescription(e.target.value)} style={{height:"8px", marginBottom:"2px"}}/>
            <hr />
			
            <button style={{fontSize:10}} onClick={() => createCalendarEvent()}>Create Calendar Event</button>
            &nbsp;&nbsp;
            <button style={{fontSize:10}} onClick={() => signOut()}>Sign Out</button>
			    </div>

			      <button style={{fontSize:10}} onClick={() => setBoolCallCal(!boolCallCal)}>{ boolCallCal ? "Hide" : "Show" }</button> &nbsp;&nbsp;
			    </div>
          </>
          :
          <>
            <div><strong>Job Dispatch</strong></div>
            <button onClick={() => googleSignIn()}>Sign In Google Calendar</button>
          </>
        }
        </div> 
  );
}

export default Calendar;