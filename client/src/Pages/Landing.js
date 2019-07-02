import React from 'react'
import IconLabelButton from '../Components/IconLabelButton'
import login from '../Images/log-in.svg'
import register from '../Images/edit.svg'

class Landing extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="pageHeader">Landing</div>

        <div display="flex" flex-direction="row">
          <IconLabelButton
            link="/login" //
            img={login}
            alt="Login"
            label="Login"
          />

          <IconLabelButton
            link="/register"
            img={register}
            alt="Register"
            label="Register"
          />
        </div>
      </React.Fragment>
    )
  }
}

export default Landing
