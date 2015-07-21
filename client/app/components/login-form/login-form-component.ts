import {Inject} from 'utils/di';

export class LoginFormComponent {

  private static selector = 'ngc-login-form';
  private static templateUrl = '/dist/components/login-form/login-form-component.html';
  private static options = {
    scope: {
      errorMessage: '=',
      fireSubmit: '&onSubmit'
    }
  };

  private errorMessage;
  private username;
  private password;
  private fireSubmit: Function;

  constructor() {
    //
  }

  private submit() {
    this.fireSubmit({
      data: this
    });
  }
}