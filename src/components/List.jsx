export default function List({ list }) {
  if (list.length === 0) return;
  return (
    <ul>
      {list.map((el) => (
        <li>
          <span>{el.content}</span>
          <span>{el.deadLine}</span>
        </li>
      ))}
    </ul>
  );
}
