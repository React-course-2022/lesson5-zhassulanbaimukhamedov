function Tasks({ list, removeItem, checkItem }) {
  return (
    <div>
      {list.map((e) => (
        <div style={{ textDecoration: e.status && "line-through" }} key={e.id}>
          {e.text}
          <button onClick={() => removeItem(e.id)}>Delete</button>
          <input onClick={(event) => checkItem(e, event)} type="checkbox" />
        </div>
      ))}
    </div>
  );
}

export default Tasks;
