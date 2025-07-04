export default function handler(req, res) {
  const { ramo, query } = req.body;

  const respuestas = {
    hogar: 'Según el condicionado Generali Hogar, la cobertura de cerrajería urgente aplica si está incluida la garantía de asistencia en el hogar.',
    comercio: 'En Generali Comercio, la cobertura de cerrajería dependerá de si se ha contratado el servicio de asistencia para el negocio.',
    auto: 'La asistencia en carretera del seguro de Auto podría incluir cerrajería si la garantía está contratada, según condiciones específicas.'
  };

  const result = respuestas[ramo] || 'Consulta no disponible para el ramo seleccionado.';
  res.status(200).json({ result });
}