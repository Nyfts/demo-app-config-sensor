import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLoading } from "../../contexts/loading";
import api from '../../services/api';

import "./index.css";

function ListMachines() {
  const loading = useLoading();

  const [machines, setMachines] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        loading.showLoading();

        const response = await api.get('equipamento')
        
        setMachines(response?.data?.equipamentos);
        console.log(response.data?.equipamentos);

      } catch (error) {
        alert("Não foi possível completar sua requisição");
        console.error(error);
      } finally {
        loading.hideLoading();
      }
    })()
  }, [])

  const history = useHistory();

  const createNew = () => {
    history.push("/cadastrar");
  };

  const editMachine = (id) => {
    history.push("/editar/" + id);
  };

  return (
    <div>
      <div className="list-machines">
        <div className="list-machines-row">
          <h1 className="list-machines-title">Lista de Equipamentos</h1>
          <button className="list-machines-item-button" onClick={createNew}>
            Cadastrar novo equipamento
          </button>
        </div>
        <div className="hr" />
        <div style={{ overflow: "auto", maxHeight: "500px", margin: "10px", padding: '10px' }}>
          {machines.map((machine) => {
            return (
              <div className="list-machines-item" id={machine.id}>
                <p className="list-machines-item-label">{machine.nome || "Sem nome"}</p>
                <button
                  className="list-machines-item-button return-button"
                  onClick={() => editMachine(machine['id:'])}
                >
                  Editar
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ListMachines;
