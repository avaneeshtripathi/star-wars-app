import serialize from 'form-serialize';
import { validateLogin } from '../../utils/appUtils';
import { doClearSession, doSetSession } from '../../utils/sessionUtils';
import messages from '../../appConstants/messages';
import urlFormatter from '../../utils/pathUtils';

const initialImagePath = require('../../../images/starwars-darth-vader.png');
const validationImagePath = require('../../../images/starwars-stormtrooper.png');

const Login = React.createClass({
    getInitialState () {
        return ({
            loginValidation: null,
            errorMessage: ''
        })
    },

    componentWillMount () {
        doClearSession();
    },

    contextTypes: {
        router: React.PropTypes.object
    },

    onSubmit (event = new Event('')) {
        event.preventDefault();
        let formData = serialize(document.querySelector('#loginForm'), { hash: true });
        if (formData.userName && formData.password) {
            let loginValidation = validateLogin(formData);
            if (loginValidation.userName && loginValidation.password) {
                doSetSession('isLoggedIn', true);
                this.context.router.push(urlFormatter.getUrl(urlFormatter.characters));
            } else {
                this.setState({
                    loginValidation: loginValidation,
                    errorMessage: this.getErrorMessage(loginValidation)
                })
            }
        }
    },

    getErrorMessage (loginValidation) {
        return !loginValidation.userName
            ? (messages.errorMessages.usernameInvalid)
            : (!loginValidation.password ? messages.errorMessages.passwordInvalid : '');
    },

    getValidationClass (flag) {
        let validationState = this.state.loginValidation;
        if (validationState) {
            return flag === 'userName'
                ? validationState.userName ? 'formControls validField' : 'formControls invalidField'
                : validationState.password ? 'formControls validField' : 'formControls invalidField'
        } else {
            return 'formControls'
        }
    },

    render () {
        let loginValidation = this.state.loginValidation;
        let imagePath = !loginValidation || (loginValidation.userName && loginValidation.password) ? initialImagePath : validationImagePath;
        return (
            <div className="loginFormWrapper">
                <div className="imageWrapper initialImage">
                    <img src={imagePath} />
                </div>
                <form ref="loginForm" id="loginForm" className="formSection loginForm" onSubmit={this.onSubmit} autoComplete="off">
                    <h1>unlock the force</h1>
                    <div className={this.getValidationClass('userName')}>
                        <input
                            type="text"
                            placeholder="username"
                            name="userName"
                        />
                        <i></i>
                    </div>
                    <div className={this.getValidationClass('password')}>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                        />
                        <i></i>
                    </div>
                    {this.state.errorMessage ? <p className="errorMessage">{this.state.errorMessage}</p> : null}
                    <button className="button buttonOrange" >login</button>
                </form>
            </div>
        );
    }
});

export default Login;
