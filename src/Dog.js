export default function Dog({ dog }) {
  return (
    <li>
      <strong>{dog.name}</strong> : {dog.breed}{' '}
    </li>
  );
}
