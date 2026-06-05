// // import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// // import { useState } from "react";
// // import L from "leaflet";

// // // Fix default marker icon issue
// // delete L.Icon.Default.prototype._getIconUrl;
// // L.Icon.Default.mergeOptions({
// //   iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
// //   iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
// //   shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
// // });

// // function LocationMarker({ setPosition }) {
// //   useMapEvents({
// //     click(e) {
// //       setPosition({
// //         lat: e.latlng.lat,
// //         lng: e.latlng.lng,
// //       });
// //     },
// //   });

// //   return null;
// // }

// // export default function MapPicker({ onSelect }) {
// //   const [position, setPosition] = useState({
// //     lat: 19.92,
// //     lng: 86.19,
// //   });

// //   return (
// //     <div>
// //       <MapContainer
// //         center={position}
// //         zoom={13}
// //         style={{ height: "300px", width: "100%" }}
// //       >
// //         <TileLayer
// //           attribution='&copy; OpenStreetMap contributors'
// //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //         />

// //         <Marker position={position} />

// //         <LocationMarker
// //           setPosition={(pos) => {
// //             setPosition(pos);
// //             onSelect(pos);
// //           }}
// //         />
// //       </MapContainer>

// //       <p className="text-sm text-gray-500 mt-2">
// //         Lat: {position.lat} | Lng: {position.lng}
// //       </p>
// //     </div>
// //   );
// // }

// import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
// import { useState } from "react";
// import L from "leaflet";

// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
//   iconUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
//   shadowUrl:
//     "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
// });

// function LocationMarker({ setPosition }) {
//   useMapEvents({
//     click(e) {
//       setPosition({
//         lat: e.latlng.lat,
//         lng: e.latlng.lng,
//       });
//     },
//   });

//   return null;
// }

// export default function MapPicker({ onSelect }) {
//   const [position, setPosition] = useState({
//     lat: 19.92,
//     lng: 86.19,
//   });

//   return (
//     // <MapContainer
//     //   center={position}
//     //   zoom={15}
//     //   style={{
//     //     height: "300px",
//     //     width: "100%",
//     //     borderRadius: "16px",
//     //     zIndex: 1,
//     //   }}
//     // >4
//     <MapContainer
//   center={position}
//   zoom={15}
//   style={{ height: "100%", width: "100%" }}
// >
//       <TileLayer
//         attribution='&copy; OpenStreetMap contributors'
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />

//       <Marker position={position} />

//       <LocationMarker
//         setPosition={(pos) => {
//           setPosition(pos);
//           onSelect(pos);
//         }}
//       />
//     </MapContainer>
//   );
// }

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Circle,
} from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// 📍 Click handler
function LocationMarker({ setPosition }) {
  useMapEvents({
    click(e) {
      setPosition({
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
  });

  return null;
}

export default function MapPicker({ onSelect }) {
  const [position, setPosition] = useState({
    lat: 19.92,
    lng: 86.19,
  });

  const [userLocation, setUserLocation] = useState(null);

  // 🌍 Get live user location (optional but powerful)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const userPos = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        };
        setUserLocation(userPos);

        // auto set initial position to user
        setPosition(userPos);
        onSelect(userPos);
      },
      (err) => console.log("Location error:", err)
    );
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
    >
      {/* 🌍 OSM Tiles */}
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* 📍 Selected Marker */}
      <Marker position={position} />

      {/* 🔵 10 KM Delivery Radius Circle */}
      <Circle
        center={position}
        radius={10000} // 10 KM = 10000 meters
        pathOptions={{
          color: "blue",
          fillColor: "blue",
          fillOpacity: 0.15,
        }}
      />

      {/* 📌 Click to change location */}
      <LocationMarker
        setPosition={(pos) => {
          setPosition(pos);
          onSelect(pos);
        }}
      />
    </MapContainer>
  );
}