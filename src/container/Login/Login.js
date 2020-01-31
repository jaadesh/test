import React, { Component } from 'react';
import { connect } from 'react-redux';

import InlineError from '../../component/Helpers/InlineError';
import { updateObject } from '../../shared/utility';
import { validateLogin } from '../../validations/login';
import * as authActions from '../../store/actions/authAction';

class Login extends Component {

  state = {
    formdata: {
      email: '',
      password: '',
    },
    errors: {},
  }

  ChangeHandler = (e) => {
    const loginData = updateObject(this.state.formdata, { [e.target.name]: e.target.value });
    this.setState({ formdata: loginData });
  }

  loginSubmitHandler = (e) => {
    e.preventDefault();

    const validationResponse = validateLogin(this.state.formdata);
    this.setState({ errors: validationResponse.error });

    if (Object.keys(validationResponse.error).length === 0) {
      this.props.onLoginSubmit(this.state.formdata);
    }
    else {
      document.getElementsByName(validationResponse.field)[0].focus();
    }
  }

  componentDidMount() {
    document.title = 'ECAP Mart';
  }

  render() {
    return (
      <section className="signin">
        <div className="panel panel-signin">
          <div className="panel-body">
            <div className="logo text-center">
              <img className="img-responsive" src="/assets/images/logo.png" alt="Logo" />
            </div>
            <br />
            {this.props.serverError ? <div className="alert alert-danger"><strong>{this.props.serverError}</strong></div> : ''}

            <div className="mb25"></div>

            <form method="post" name="login" onSubmit={this.loginSubmitHandler}>
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                <input type="text" autoFocus className="form-control" placeholder="Username / email" onChange={this.ChangeHandler} value={this.state.formdata.email} name="email" autoComplete="off" />
              </div>
              {this.state.errors.email ? <InlineError text={this.state.errors.email} /> : ''}
              <div className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                <input type="password" className="form-control" placeholder="Password" onChange={this.ChangeHandler} value={this.state.formdata.password} name="password" autoComplete="off" />
              </div>
              {this.state.errors.password ? <InlineError text={this.state.errors.password} /> : ''}
              <div className="clearfix">
                <br />
                <div className="text-center">
                  <input type="submit" disabled={this.props.loading} className="btn btn-success" value={this.props.loading ? 'Please Wait...' : 'Login'} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.Auth.loading,
    serverError: state.Auth.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSubmit: (userdata) => dispatch(authActions.authStart(userdata)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);