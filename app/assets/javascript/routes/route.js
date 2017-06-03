import { createHashHistory } from 'history';
import { IndexRoute, Router, Route, useRouterHistory } from 'react-router';

const history = useRouterHistory(createHashHistory)();

import Container from '../container/index';
import Login from '../components/auth/login';
import Profile from '../components/profile/index';
import CharacterList from '../components/profile/characterList';
import CharacterDetails from '../components/profile/characterDetails';

const Root = React.createClass({
    render() {
        return (
            <Router history = {history}>
                <Route name='container' path='/' component={Container}>
                    <IndexRoute component={Login} />
                    <Route name='profile' path='/' component={Profile}>
                        <IndexRoute component={CharacterList} />
                        <Route name='characterList' path='/characters' component={CharacterList} />
                        <Route name='characterDetails' path='/characters/:characterName/details' component={CharacterDetails} />
                    </Route>
                </Route>
            </Router>
        );
    }
});

export default Root;
