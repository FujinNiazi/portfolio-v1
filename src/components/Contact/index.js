import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef ()

    useEffect(() => {
        return () => setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm(
           'service_37az0io', 
           'template_p47r5bt', 
           form.current, 'ZFLLXsuCS1ymKZn5f'
          )
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }
    
    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                      letterClass={letterClass}
                      strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                      idx={15}
                    />
                </h1>
                <p>
                    Contact Me
                </p>
                <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="to_name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="reply_to"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="from_name"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
                </div>
            </div>
            <div className='info-map'>
                Umer,
                <br />
                Seoul (서울특별씨),
                <br />
                Add address here. <br />
                <br />
                Email:<span>m.umerniazi@gmail.com</span> <br/>
                Phone No:
                <span>+921027264662</span>
            </div>
            <div className='map-wrap'>
            <MapContainer center={[37.5229, 127.0909]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[37.5249753680482, 127.11499214172365]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
               <Popup>I work here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
            </div>
        </div>
        <Loader type="pacman"/>
    </>)
}

export default Contact