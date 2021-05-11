import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLoading } from "../../contexts/loading";

import "./index.css";

function ListMachines() {
  const loading = useLoading();

  const [machines, setMachines] = useState([]);

  useEffect(() => {
    loading.showLoading();
    setTimeout(() => {
      setMachines([
        { id: 1, nome: "Equipamento 1" },
        { id: 2, nome: "Nome 2" },
        { id: 3, nome: "Nome 3" },
        { id: 4, nome: "Nome 4" },
        { id: 1, nome: "Equipamento 1" },
        { id: 2, nome: "Nome 2" },
        { id: 3, nome: "Nome 3" },
        { id: 4, nome: "Nome 4" },
        { id: 1, nome: "Equipamento 1" },
        { id: 2, nome: "Nome 2" },
        { id: 3, nome: "Nome 3" },
        { id: 4, nome: "Nome 4" },
      ]);
      loading.hideLoading();
    }, 1000);
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
        <div style={{ overflow: "auto", maxHeight: "500px", margin: "15px" }}>
          {machines.map((machine) => {
            return (
              <div className="list-machines-item" id={machine.id}>
                <p className="list-machines-item-label">{machine.nome}</p>
                <button
                  className="list-machines-item-button return-button"
                  onClick={() => editMachine(machine.id)}
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
