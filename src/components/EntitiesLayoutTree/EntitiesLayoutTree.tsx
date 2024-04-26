import React, { useState } from "react";
import "./EntitiesLayoutTree.scss";

interface Data {
  id: number;
  name: string;
  puesto: string;
  parentId: number | null;
}

function EntitiesLayoutTree(props: {
  data: Data[];
  setData: (data: Data[]) => void;
}) {
  const [draggedItem, setDraggedItem] = useState<Data | null>(null);

  const handleDragStart = (
    item: Data,
    event: React.DragEvent<HTMLDivElement>
  ) => {
    setDraggedItem(item);
    event.currentTarget.classList.add("dragging");
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    parentId: number,
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    if (draggedItem) {
      console.log("Item dropped. parentId:", parentId);
      // Actualizar el parentId del elemento arrastrado
      const updatedData = props.data.map((item) =>
        item.id === draggedItem.id ? { ...item, parentId } : item
      );
      console.log("Updated data:", updatedData);
      // Actualizar el estado con los datos actualizados
      setDraggedItem(null);
      // Actualizar el estado global de los datos
      props.setData(updatedData);
    }
  };

  const renderEntity = (entity: Data, level: number) => {
    const parentContainer = {
      backgroundColor: level === 0 ? "green" : "yellow",
      padding: "20px",
      margin: "20px",
    };
    const childContainer = {
      backgroundColor: level % 2 === 0 ? "lightblue" : "lightpink",
      padding: "20px",
      color: "#000",
    };

    const dropWrapper = {
      background: "red",
    };

    const children = props.data.filter((child) => child.parentId === entity.id);

    return (
      <div style={parentContainer} key={entity.id}>
        <div onDragStart={(e) => handleDragStart(entity, e)} draggable={true}>
          <p>ID: {entity.id}</p>
          <p>Name: {entity.name}</p>
          <p>Puesto: {entity.puesto}</p>
        </div>
        {children.length > 0 && (
          <ul style={childContainer}>
            {children.map((child) => renderEntity(child, level + 1))}
          </ul>
        )}
        <div
          style={dropWrapper}
          onDragOver={(e) => handleDragOver(e)}
          onDrop={(e) => handleDrop(entity.id, e)}
        >
          Drop
        </div>
      </div>
    );
  };

  const parentEntities = props.data.filter(
    (entity) => entity.parentId === null
  );

  return <>{parentEntities.map((entity) => renderEntity(entity, 0))}</>;
}

export default EntitiesLayoutTree;
