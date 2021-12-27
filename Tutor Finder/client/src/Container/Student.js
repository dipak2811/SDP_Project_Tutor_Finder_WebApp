import React, { Component } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import StudentLogin from "../Components/Auth/Student/Login";
import StudentRegister from "../Components/Auth/Student/Register";
import Layout from "./Layout/Student/StudentLayout";
import Dashboard from "../Components/Dashboard/StudentDashboard";
import Alert from "../Components/UI/Alert";
import { connect } from "react-redux";
import * as action from "../Store/actions";
import StudentProfile from "../Components/Profile/StudentProfile";

class Student extends Component {
  async componentDidMount() {
    await this.props.loadStudent();
  }

  render() {
    return (
      <div>
        <Layout>
          <Alert />
          <Switch>
            <Route exact path='/student/register' component={StudentRegister} />
            <Route exact path='/student/login' component={StudentLogin} />
            <Route exact path='/student/dashboard' component={Dashboard} />
            <Route exact path='/student/profile' component={StudentProfile} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadStudent: () => dispatch(action.loadStudent()),
  };
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(Student);
