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
    return (
      <div>
        <div>Calendar</div>
        <div>{weekDays}</div>
      </div>
    );
  }
}

export default Calendar;
