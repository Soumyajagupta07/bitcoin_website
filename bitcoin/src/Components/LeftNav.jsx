import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
const LeftNav = () => {
    return (
        <div className="LeftNav">
            <div className="MagGlass">
                <input type="text" />
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </div>
            <div className="brightness">
                {/* <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon> */}
            </div>
        </div>

    )
}
export default LeftNav;