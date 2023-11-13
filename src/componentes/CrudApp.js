import React, { useState } from "react";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const initialDb = [
  {
    id: 1,
    name: "Griezmann",
    team: "Atlético de Madrid",
  },
  {
    id: 2,
    name: "Bellingham",
    team: "Real Madrid",
  },
  {
    id: 3,
    name: "Koke",
    team: "Atlético de Madrid",
  },
  {
    id: 4,
    name: "Pedri",
    team: "F.C. Barcelona",
  },
  {
    id: 5,
    name: "Oblak",
    team: "Atlético de Madrid",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDb);

  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con el id ${id} ?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD APP</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApp;
