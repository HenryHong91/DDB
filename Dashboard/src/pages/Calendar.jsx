import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DataPickerComponet } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../data/dummy";
import { Header } from "../components";
import { Data } from "@syncfusion/ej2-react-grids";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject
          services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>

      <div className=" flex justify-center mt-10">
        <p>*Adjust the schedule using Drag and Drop and click</p>
      </div>
    </div>
  );
};

export default Calendar;
