interface Data {
  id: number;
  name: string;
  puesto: string;
  parentId: number;
}

function EntitiesLayoutTree(props: { data: Data[] }) {
  const parentContainer = {
    backgroundColor: "green",
    padding: "20px",
    margin: "20px",
  };
  const childContainer = {
    backgroundColor: "yellow",
    padding: "20px",
    color: "#000",
  };

  const renderEntities = (entities: Data[]) => {
    // Filtrar las entidades que tienen parentId null
    const parentEntities = entities.filter(
      (entity) => entity.parentId === null
    );

    return parentEntities.map((entity) => {
      // Filtrar los hijos de la entidad actual
      const children = props.data.filter(
        (child) => child.parentId === entity.id
      );

      // Renderizar la entidad y sus hijos si los tiene
      return (
        <div style={parentContainer} key={entity.id}>
          <p>ID: {entity.id}</p>
          <p>Name: {entity.name}</p>
          <p>Puesto: {entity.puesto}</p>
          {children.length > 0 && (
            <ul style={childContainer}>
              {children.map((child) => (
                <li key={child.id}>{child.name}</li>
              ))}
            </ul>
          )}
        </div>
      );
    });
  };

  return <>{renderEntities(props.data)}</>;
}

export default EntitiesLayoutTree;
