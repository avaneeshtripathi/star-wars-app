import { doGetSession } from '../../utils/sessionUtils';
import urlFormatter from '../../utils/pathUtils';

const basePath = './assets/images/';
const CharacterDetails = React.createClass({

    getInitialState () {
        return ({
            characterInfo: doGetSession('characterInfo')
        })
    },

    contextTypes: {
        router: React.PropTypes.object
    },

    navigateBack (event = new Event('')) {
        event.preventDefault();
        this.context.router.push(urlFormatter.getUrl(urlFormatter.characters));
    },

    render () {
        let characterInfo = this.state.characterInfo;
        return (
            <div className="characterDetailsWrapper">
                <h3 onClick={this.navigateBack}><i className="backArrow">&larr;</i> GO BACK </h3>
                <h1 className="listHeading">unlock the force</h1>
                {characterInfo
                    ? <div className="characterDescription">
                          <div className="imageWrapper">
                              <img src={basePath + characterInfo.image} />
                          </div>
                          <h2>{characterInfo.name}</h2>
                          <p>{characterInfo.about}</p>
                      </div>
                    : null
                }
            </div>
        );
    }
});

export default CharacterDetails;
