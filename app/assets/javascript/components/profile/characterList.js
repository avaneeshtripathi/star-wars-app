import characterList from '../../../static/jedi.json';
import { doSetSession } from '../../utils/sessionUtils';
import { formatCharacterName } from '../../utils/appUtils';
import urlFormatter from '../../utils/pathUtils';

const basePath = './assets/images/';

const CharacterList = React.createClass({

    getInitialState () {
        return ({
            characterInfo: null
        })
    },

    contextTypes: {
        router: React.PropTypes.object
    },

    onCharacterSelect (characterInfo) {
        this.setState({
            characterInfo: characterInfo
        })
    },

    showDetails () {
        let characterInfo = this.state.characterInfo;
        doSetSession('characterInfo', characterInfo);
        this.context.router.push(urlFormatter.getUrl(urlFormatter.details, formatCharacterName(characterInfo.name)));
    },

    render () {
        return (
            <div className="characterListWrapper">
                <h1 className="listHeading">unlock the force</h1>
                <p className="listText">Please chose your character</p>
                <div className="characterListWrap">
                    <ul className="characterListing">
                        {characterList.map((row, key) => {
                            return (
                                <li key={key}>
                                    <input type="radio" name="character" id={'character' + key} onChange={this.onCharacterSelect.bind(this, row)} />
                                    <label htmlFor={'character' + key} className="imageWrapper"><img src={basePath + row.image} /></label>
                                    <div className="check"></div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <button className="button buttonYellow" onClick={this.showDetails}>show details</button>
            </div>
        );
    }
});

export default CharacterList;
