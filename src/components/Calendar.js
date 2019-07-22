import React, { Component } from "react";
import moment from "moment";
import { Grid } from "semantic-ui-react";

class Calendar extends Component {
  weekDays = moment.weekdays();
  months = moment.months();

  state = {
    selectedDay: null
  };

  //grab months

  //grab weeks

  //format calendar + cells

  //apply months to cells

  render() {
    let weekDays = this.weekDays.map(day => {
      return (
        <Grid.Column key={day}>
          <Grid.Row>
            <th key={day} className="column">
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
      </div>
    );
  }
}

export default Calendar;
