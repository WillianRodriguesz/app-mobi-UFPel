"use client"
import * as mqtt from 'mqtt'
import { useEffect, useState } from 'react'

export default function Home() {
  const [msg, setMsg] = useState('')

  useEffect(() => {
    //acessar https://mqttx.app/ para criar uma conexão
    const client = mqtt.connect('ws://broker.emqx.io:8083/mqtt')

    client.on('connect', handleConnection)

    function handleConnection() {
      client.subscribe('teste_rotas')

      client.on('message', (topic, message) => {
        setMsg(message.toString())
      })
    }

    return () => {
      client.end()
    }
  }, [])

  return (
    <main>
      {msg && <p>Localização do celular recebida pelo mqtt: {msg}</p>}
    </main>
  )
}
