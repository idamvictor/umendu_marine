"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { contact } from "@/lib/site";

const officeIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  shadowUrl: "/leaflet/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const officePosition: [number, number] = [4.7789892, 7.0124991];

export function LeafletMap() {
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));

    return () => {
      // React StrictMode double-invokes effects in dev, which leaves Leaflet's
      // container marked as already-initialized on the simulated remount.
      const container = mapRef.current?.getContainer() as
        | (HTMLElement & { _leaflet_id?: number | null })
        | undefined;
      if (container) {
        container._leaflet_id = null;
      }
    };
  }, []);

  return (
    <MapContainer
      ref={mapRef}
      center={officePosition}
      zoom={15}
      scrollWheelZoom={false}
      className="size-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={officePosition} icon={officeIcon}>
        <Popup>
          <span className="font-medium">{contact.companyName}</span>
          <br />
          {contact.addressLine1}, {contact.addressLine2}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
