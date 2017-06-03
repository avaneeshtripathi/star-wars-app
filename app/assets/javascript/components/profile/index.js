import { doGetSession } from '../../utils/sessionUtils';
import urlFormatter from '../../utils/pathUtils';

const Profile = React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    componentWillMount () {
        if (!doGetSession('isLoggedIn')) {
            this.context.router.push(urlFormatter.getUrl(urlFormatter.login));
        }
    },

    render () {
        return this.props.children;
    },
});

export default Profile;
