import React from 'react';
import { Card } from 'flowbite-react';
import { RiTimeLine } from 'react-icons/ri';
import './card.css'; // Importe o arquivo CSS

function CardHorario() {
  
  const linhasDeOnibus = [
    { nome: 'Linha Anglo', horarios: ['8:00', '9:30', '12:00', '09:00', '10:00', '11:00', 
                                      '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', 
                                      '18:00', '19:00', '20:00', '21:00', '21:45', '22:20']},
    { nome: 'Linha Anglo – ESEF – FaMed – Eng. Madeireira ', horarios: ['7:00', '09:00', '11:15', '13:00', '16:50', '18:00', '18:20', '20:00', '21:00', '22:10'] },
    { nome: 'Linha 3', horarios: ['9:00', '11:00', '14:00'] },
    // Adicione mais linhas conforme necessário
  ];

  return (
    <div className="card-container">
      {linhasDeOnibus.map((linha, index) => (
        <Card key={index} className="card">
          <div className="card-content">
            <h5 className="card-title">
              {linha.nome}
            </h5>
            <div className="card-horarios">
              <RiTimeLine className="clock-icon" />
              {linha.horarios.map((horario, idx) => (
                <React.Fragment key={idx}>
                  {idx > 0 && idx % 6 === 0 && <br />} {/* Adiciona quebra de linha a cada 6 horários */}
                  {(idx > 0 && idx % 6 !== 0) && ' - '} {/* Adiciona hífen, exceto no início da linha */}
                  {horario}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default CardHorario;
