import React, { Component } from "react";
import moment from "moment";
import { Grid, Button, Modal, Dropdown } from "semantic-ui-react";

//possible redux use
//add dates, months, weeks, appointments to store
//pass from NewAppointments to Calendar component and render accordinlgy


class NewAppointments extends Component {
  render() {
    return (
      <div>
        <Modal trigger={<Button>Create Appointments</Button>}>
          <Modal.Content>
            <Dropdown>
                <Dropdown.Item text='New' /> 
            </Dropdown>
            <Button>Make Appointment</Button>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default NewAppointments;
