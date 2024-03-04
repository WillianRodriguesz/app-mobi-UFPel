import Cards from './cardsHorario/cardsHorarios';

export default function Inicio() {
  return (
    <main style={{ textAlign: 'center' }}>
      <h3 style={{ marginBottom: '20px' }}>Horários dos ônibus de apoio</h3>
      <Cards />
    </main>
  );
}
