import  { useState } from 'react';
import './Form.scss';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validaciones
    const nameRegex = /^[a-zA-Z\s]+$/; 
    if (
      formData.fullName.length < 5 ||
      !formData.fullName.match(nameRegex) ||
      !formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      setError('Por favor verifique su información nuevamente');
      return;
    }
  
    console.log('Datos enviados:', formData);
  
    setSuccessMessage(`Gracias ${formData.fullName}, te contactaremos cuanto antes vía email.`);
    setFormData({
      fullName: '',
      email: '',
    });
    setError('');
  };

  return (
    <div className="contact">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nombre completo:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;

