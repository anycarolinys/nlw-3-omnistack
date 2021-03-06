import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';


function OrphanagesMap() {
    return (
        <div id = "page-map">
            <aside>
                <header>
                    <img src = {mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão a espera da sua visita :D</p>
                </header>

                <footer>
                    <strong>Aracaju</strong>
                    <span>Sergipe</span>
                </footer>
            </aside>

            <MapContainer
                center = {[-10.9051734,-37.034789]}
                zoom = {15}
                style = {{width : '100%', height : '100%' }} 
                > 
                {/* <TileLayer url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/> */}
                
                <TileLayer 
                url = {`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN_MAPBOX}`}
                />
                
                <Marker
                    icon={mapIcon}
                    position = {[-10.9051734,-37.034789]} 
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das meninas
                        <Link to="orphanages/1">
                            <FiArrowRight>
                                size={20} 
                                color="#FFF"
                            </FiArrowRight>
                        </Link>
                    </Popup>
                </Marker>
            </MapContainer>

            <Link to ="/ophanages/create" className = "create-orphanage">
                <FiPlus size = {32} color = "#FFF" />
            </Link>
        </div>

    );
}

export default OrphanagesMap;