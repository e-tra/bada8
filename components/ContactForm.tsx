
'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    tipoServicio: '',
    ubicacion: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aquí iría la lógica de envío del formulario
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        tipoServicio: '',
        ubicacion: '',
        mensaje: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-readdy-form id="contact-form">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Nombre *</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Teléfono *</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Empresa</label>
          <input
            type="text"
            name="empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Tipo de Servicio *</label>
          <div className="relative">
            <select
              name="tipoServicio"
              value={formData.tipoServicio}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors appearance-none pr-8"
              required
            >
              <option value="">Selecciona un servicio</option>
              <option value="local-comercial">Vaciado Local Comercial</option>
              <option value="oficina">Vaciado Oficina</option>
              <option value="nave-industrial">Vaciado Nave Industrial</option>
              <option value="limpieza-posterior">Limpieza Posterior</option>
              <option value="gestion-residuos">Gestión de Residuos</option>
              <option value="varios">Varios Servicios</option>
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-3 text-gray-400"></i>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Ubicación *</label>
          <input
            type="text"
            name="ubicacion"
            value={formData.ubicacion}
            onChange={handleChange}
            placeholder="Ej: Badalona, Barcelona..."
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-700 font-medium mb-2">Mensaje *</label>
        <textarea
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={4}
          maxLength={500}
          placeholder="Describe tu proyecto de vaciado: tamaño del local, tipo de mobiliario, fecha aproximada..."
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 transition-colors resize-none"
          required
        />
        <p className="text-sm text-gray-500 mt-1">{formData.mensaje.length}/500 caracteres</p>
      </div>

      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <p className="text-green-800 font-medium">¡Mensaje enviado correctamente!</p>
          <p className="text-green-700 text-sm">Nos pondremos en contacto contigo en menos de 2 horas.</p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-800 font-medium">Error al enviar el mensaje</p>
          <p className="text-red-700 text-sm">Por favor, inténtalo de nuevo o llámanos al 609 93 65 90.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap"
      >
        {isSubmitting ? 'Enviando...' : 'Solicitar Presupuesto Gratuito'}
      </button>

      <p className="text-sm text-gray-600 text-center">
        Al enviar este formulario aceptas que BADA8 se ponga en contacto contigo para ofrecerte un presupuesto personalizado.
      </p>
    </form>
  );
}
