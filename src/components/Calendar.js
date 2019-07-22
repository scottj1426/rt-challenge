import React, { Component } from "react";
import moment from "moment";
import { Grid } from "semantic-ui-react";

class Calendar extends Component {
  weekDays = moment.weekdays();
  months = moment.months();

  state = {
    selectedDay: null,
  }

  render() {
    let weekDays = this.weekDays.map(day => {
      return (
        <Grid.Row>
          <Grid.Column key={day}>
            <th key={day} className="column">
              {day}
            </th>
          </Grid.Column>
        </Grid.Row>
      );
    });

    let months = this.months.map(month => {
        return (
          <Grid.Row>
            <Grid.Column key={month}>
              <th key={month} className="column">
                {month}
              </th>
            </Grid.Column>
          </Grid.Row>
        );
    });
    console.log(months)
    return (
      <div>
        <div>Calendar</div>
        <div>{months}</div>
        <div>{weekDays}</div>
      </div>
    );
  }
}

export default Calendar;
