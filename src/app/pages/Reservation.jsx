"use client";
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import BootstrapTheme from "@fullcalendar/bootstrap";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import "bootstrap-icons/font/bootstrap-icons.css";
import ButtonBackContinue from "../components/ButtonBackContinue";


const Reservation = () => {
  // var calendar = new Calendar(calendarEl, {
  //     initialDate: '2014-11-10',
  //     initialView: 'timeGridWeek',
  //     events: [
  //       {
  //         start: '2014-11-10T10:00:00',
  //         end: '2014-11-10T16:00:00',
  //         display: 'background'
  //       }
  //     ]
  //   });
  return (
    <div className="container">
      <form className="input-group my-4 search-bar" role="search">
        <input
          className="form-control"
          type="search"
          placeholder="Search event"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
        <button className="btn " type="submit" id="button-addon2">
          <i className="bi bi-search"></i>
        </button>
      </form>
      {/* Add your reservation page content here */}
      <FullCalendar
        plugins={[
          resourceTimelinePlugin,
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
        ]}
        headerToolbar={{
          left: "title",
          right: "prev,next",
          // right: 'resourceTimelineWeek,dayGridMonth,timeGridWeek'
        }}
        initialView="dayGridMonth"
        nowIndicator={true}
        editable={true}
        selectable={true}
        selectMirror={true}
        events={[
          {
            start: "2023-11-11T10:00:00",
            title: "Event",
            end: "2023-11-11T16:00:00",
            display: "background",
          },
        ]}
      />

      <div className="additional-info mt-3">
        <h4>Additional Information</h4>
        <select
          className="form-select my-3 time-picker"
          aria-label="Choose Time"
        >
          <option selected>00:00 - 00:00</option>
          <option value="1">12:00 - 17:00</option>
          <option value="2">17:00 - 22:00</option>
          <option value="3">22:00 - 03:00</option>
        </select>

        <div className="input-group mb-3 pack-counter">
          <input
            type="text"
            className="form-control"
            placeholder="Choose Pack"
            aria-label="Pack"
            aria-describedby="basic-addon2"
          />
          <span className="input-group-text" id="basic-addon2">
            <i className="bi bi-person"></i>
          </span>
        </div>

        <div className="reservation-area">
          <span className="mb-2 d-block">RSVP Area</span>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioFloor"
              checked
            />
            <label className="form-check-label" for="flexRadioFloor">
              Floor
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioKaraoke"
            />
            <label className="form-check-label" for="flexRadioKaraoke">
              Room Karaoke
            </label>
          </div>
        </div>

        <div className="my-4 terms-condition">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
                I read and agree to the above terms and conditions
            </label>
          </div>
          <ButtonBackContinue />
        </div>
      </div>
    </div>
  );
};

export default Reservation;
