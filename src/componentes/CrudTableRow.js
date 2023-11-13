import React from "react";

const CrudTableRow = ({ el, setDataToEdit, delteData }) => {
    let {name, constellation, id} = el

  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={() => setDataToEdit(el) }>Editar</button>
        <button onClick={() => delteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
