import React from "react";
import "./Chatbot.css";
import bot from "../assets/bot.png";
import $ from "jquery";

const displayNone = { display: "none" };
const verticalAlign = { verticalAlign: "middle" };
const marginTop = { marginTop: "8px" };

var boolCall = false;

function callBot() {
  if (boolCall) $("#divBot").css("display", "none");
  else $("#divBot").css("display", "");
  boolCall = !boolCall;
}

$(function () {
  $("#send-btn").on("click", function () {
    const $value = $("#data").val();
    const $msg =
      '<div class="user-inbox inbox"><div class="msg-header"><p>' +
      $value +
      "</p></div></div>";
    $(".form").append($msg);
    $("#data").val("");

    //Call wit.ai API
    const uri =
      "https://api.wit.ai/event?v=20221218&session_id=3s&context_map=%7B%7D";
    const auth = "Bearer XQDRHPXHJHC6TYWKERMJQZS4LCGJUH3Z";

    fetch(uri, {
      method: "POST",
      headers: {
        Authorization: auth,
      },
      body: JSON.stringify({
        type: "message",
        message: $value,
      }),
    })
      .then((res) => res.json())
      .then((res) => writemsg(res.response.text));
  });
});

function writemsg(result) {
  const $replay =
    '<div class="bot-inbox inbox"><div class="icon"><i class="fa fa-check"></i></div><div class="msg-header"><p>' +
    result +
    "</p></div></div>";
  $(".form").append($replay);
  // when chat goes down the scroll bar automatically comes to the bottom
  $(".form").scrollTop($(".form")[0].scrollHeight);
}

function Chatbot() {
  return (
    <div id="container">
      <img
        src={bot}
        className="float"
        id="btnBot"
        onClick={callBot}
        alt="bot"
      />
      <div className="wrapper botfloat" id="divBot" style={displayNone}>
        <div className="title">W's Assistant</div>
        <div className="form">
          <div className="bot-inbox inbox">
            <div className="icon">
              <i className="fa fa-check" style={verticalAlign} />
            </div>
            <div className="msg-header">
              <p>
                Hi, I am the chatbot assistant of W’s, please enter the
                abbreviation what service do you need us to provide about (hw)
                hardware? or (sw) software? or (nw) network?
              </p>
            </div>
          </div>
        </div>
        <div className="typing-field">
          <div className="input-data">
            <input
              id="data"
              type="text"
              placeholder="Type abbreviation here.."
              required
              onBlur="CheckLang()"
            />
            <button id="send-btn" style={marginTop}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
