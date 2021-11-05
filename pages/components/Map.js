import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWRhcG9kYWNhOTIiLCJhIjoiY2t2bG82ZmNyMDJ4cTJvbW83cmRoZWpwMCJ9.9lwNYrU-lTt-lB2d-Cy9bg";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });

  return (
    <div>
      <Wrapper id="map"></Wrapper>
    </div>
  );
};

export default Map;

const Wrapper = tw.div`
    flex-1 h-96
`;
