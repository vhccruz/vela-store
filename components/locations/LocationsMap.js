import { compose, withState } from 'recompose'
import Map from 'components/Map'
import MapMarker from 'components/MapMarker'
import LocationInfo from 'components/locations/LocationInfo'
import { BackIcon } from 'components/Icons'

const LocationsMap = ({ locations, setSelected, selected }) =>
  <div className='LocationsMap'>
    <Map onClick={e => e.event.target.nodeName === 'DIV' && setSelected(null)}>
      {locations.map(({ pos, type }, i) =>
        <MapMarker
          lat={pos.lat}
          lng={pos.lng}
          type={type}
          onClick={() => setSelected(i)}
          selected={selected === i}
          disabled={selected !== null && selected !== i}
        />
      )}
    </Map>
    { selected !== null &&
      <div className='info'>
        <a onClick={() => setSelected(null)}>
          <BackIcon />
        </a>
        <LocationInfo {...locations[selected]} />
      </div>
    }
    <style jsx>{`
      .LocationsMap {
        height: 100%
      }
      .info {
        position: absolute;
        top: 1rem; left: 1rem; right: 1rem;
        padding: 0 2rem 2rem;
        background-color: #f5f5f5;
      }
      .info a {
        position: absolute;
        right: 1rem;
        top: 1rem;
      }
      @media only screen and (min-width: 768px) {
        .info {
          max-width: 320px;
        }
      }
    `}</style>
  </div>

export default compose(
  withState('selected', 'setSelected', null)
)(LocationsMap)
