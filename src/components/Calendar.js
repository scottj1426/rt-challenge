import React, { Component } from "react";
import moment from "moment";
import { Grid } from "semantic-ui-react";

class Calendar extends Component {
  weekDays = moment.weekdays();
  months = moment.months();

  state = {
    currentMonth: null,
    selectedDay: null,
  };

  //grab months

  //grab week days

  //format calendar + cells
  renderCalendar() {
    let monthStart = new moment().startOf('month').format("YYYY-DD-MM");
    let monthEnd new moment().endOf('month').format("YYYY-DD-MM");
    let weekStart = new moment().startOf('week');
    let weekEnd new moment().endOf('week');

    const calendarRows = [];

    while (weekdays <= weekEnd){
        for(){
            
        }
    }
      
  }

  //apply months to cells

  render() {
    let months = this.months.map(month => {
        return (
          <Grid.Column key={month}>
            <Grid.Row>
              <th key={month} className="">
                {month}
              </th>
            </Grid.Row>
          </Grid.Column>
        );
      });

    let weekDays = this.weekDays.map(day => {
      return (
        <Grid.Column key={day}>
          <Grid.Row>
            <th key={day} className="">
              {day}
            </th>
          </Grid.Row>
        </Grid.Column>
      );
    });

    return (
      <div>
        <div>Calendar</div>
        <div>{weekDays}</div>
        <div>{months}</div>
      </div>
    );
  }
}

export default Calendar;
