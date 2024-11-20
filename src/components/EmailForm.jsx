import { useState } from "react";

function EmailForm() {
    const [email, setEmail] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando correo a:", email);
        // Aquí puedes integrar la lógica de envío de correo
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
                placeholder="Introduce tu email"
            />
            <button type="submit">Enviar Clima</button>
        </form>
    );
}

export default EmailForm;
