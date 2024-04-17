interface Data {
  id: number;
  name: string;
  puesto: string;
}

function EntitiesLayoutTree(props: { data: Data[] }) {
  return (
    <>
      {props.data.map((item) => (
        <div key={item.id}>
          {item.name}
          {item.puesto}
        </div>
      ))}
    </>
  );
}

export default EntitiesLayoutTree;
