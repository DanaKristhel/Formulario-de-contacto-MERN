import React, { useState } from 'react'
import Axios from 'axios'

export default function Formulario() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textMessage, setTextMessaje] = useState('')

    const regist = async (e) => {
        e.preventDefault()
        const NewContact = { name, email, textMessage }
        const response = await Axios.post('http://localhost:4000/api', NewContact)
        const mensaje = response.data.mensaje
        alert(mensaje)
    }

    return (
        <div className="container col-md-3">
            <form onSubmit={regist}>
                <h1>Contacto</h1>
                <div className="mb-3">
                    <input type="name" className="form-control" id="contactFormName" required placeholder="Nombre" onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="contactFormEmail" required placeholder="Email" onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <textarea type="text" className="form-control" id="contactFormTextarea" required placeholder="Mensaje" rows="3" onChange={e => setTextMessaje(e.target.value)}></textarea>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}
