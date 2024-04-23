import "./EntitiesLayoutTree.scss";

interface Data {
  id: number;
  name: string;
  puesto: string;
  parentId: number | null; // Cambiado a permitir null
}

function EntitiesLayoutTree(props: { data: Data[] }) {
  const renderEntity = (entity: Data, level: number) => {
    const parentContainer = {
      backgroundColor: level === 0 ? "green" : "yellow", // Estilo diferente para los nodos principales
      padding: "20px",
      margin: "20px",
    };
    const childContainer = {
      backgroundColor: level % 2 === 0 ? "lightblue" : "lightpink", // Estilo alternativo para los niveles pares e impares
      padding: "20px",
      color: "#000",
    };

    // Filtrar los hijos de la entidad actual
    const children = props.data.filter((child) => child.parentId === entity.id);

    return (
      <div style={parentContainer} key={entity.id}>
        <p>ID: {entity.id}</p>
        <p>Name: {entity.name}</p>
        <p>Puesto: {entity.puesto}</p>
        {children.length > 0 && (
          <ul style={childContainer}>
            {children.map((child) => renderEntity(child, level + 1))}
          </ul>
        )}
      </div>
    );
  };

  // Filtrar las entidades que tienen parentId null para comenzar el renderizado
  const parentEntities = props.data.filter(
    (entity) => entity.parentId === null
  );

  return <>{parentEntities.map((entity) => renderEntity(entity, 0))}</>;
}

export default EntitiesLayoutTree;
