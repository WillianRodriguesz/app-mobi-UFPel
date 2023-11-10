"use client";
import * as mqtt from "mqtt";
import { useEffect, useState } from "react";

export default function Phone() {
  const [msg, setMsg] = useState("");
  const [location, setLocation] = useState("");
  const [client, setClient] = useState<mqtt.MqttClient | null>(null);

  useEffect(() => {
    // Access https://mqttx.app/ to create a connection
    const mqttClient = mqtt.connect("ws://broker.emqx.io:8083/mqtt");
    setClient(mqttClient);

    mqttClient.on("connect", handleConnection);

    function handleConnection() {
      console.log("Connected to MQTT broker!");
    }

    return () => {
      mqttClient.end();
    };
  }, []);

  const requestLocation = () => {
    setMsg("Por favor, conceda permissão para acessar a localização.");
    navigator.geolocation.getCurrentPosition(
      (currentLocation) => {
        const newLocation =
          currentLocation.coords.latitude + "," + currentLocation.coords.longitude;
        setLocation(newLocation);

        if (client && client.connected) {
          client.publish("teste_rotas", newLocation);
        }
      },
      (error) => {
        setMsg("Erro ao obter a localização. Verifique suas configurações.");
        console.error(error);
      }
    );
  };

  return (
    <main>
      <button onClick={requestLocation}>Enviar localização</button>
      {msg && <p>{msg}</p>}
      {location && <p>{location}</p>}
    </main>
  );
}
