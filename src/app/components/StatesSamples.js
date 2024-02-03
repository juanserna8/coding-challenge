'use client'
import React, { useEffect, useState } from 'react'

// Services
import { countStatesPersample } from '../services/countStatesPerSample'

export default function StatesSamples({data}) {
    
    // Variables
    const [vic, setVic] = useState()
    const [nsw, setNsw] = useState()
    const [tas, setTas] = useState()
    const [sa, setSa] = useState()
    const [qld, setQld] = useState()
    const [wa, setWa] = useState()
    const [act, setAct] = useState()

    // Use effect hooks
    useEffect(() => {
        const countStates = () => {
            try {
                const resVic = countStatesPersample(data, 'Vic')
                setVic(resVic)
                const resNsw = countStatesPersample(data, 'New')
                setNsw(resNsw)
                const resTas = countStatesPersample(data, 'Tas')
                setTas(resTas)
                const resSa = countStatesPersample(data, 'South')
                setSa(resSa)
                const resQld = countStatesPersample(data, 'Queen')
                setQld(resQld)
                const resWa = countStatesPersample(data, 'West')
                setWa(resWa)
                const resAct = countStatesPersample(data, 'Aus')
                setAct(resAct)

            } catch (error) {
                console.error('error', error)
            }
        }
        countStates()
    }, [data])

    return (
    <div>
        <p>VIC: {vic}</p>
        <p>NSW: {nsw}</p>
        <p>TAS: {tas}</p>
        <p>SA: {sa}</p>
        <p>QLD: {qld}</p>
        <p>WA: {wa}</p>
        <p>ACT: {act}</p>
        <h2>Total: {vic+nsw+tas+sa+qld+wa+act}</h2>
    </div>
  )
}
