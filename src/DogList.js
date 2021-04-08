import Dog from './Dog';

export default function DogList({ dogs, filterString, setFilterString, showDogs }) {
  return (
    <>
      <h1>Woof</h1>
      Name filter:{' '}
      <input
        type="text"
        value={filterString}
        onChange={(e) => setFilterString(e.target.value)}
      ></input>
      {showDogs ? (
        <ul>
          {dogs
            .filter((dog) => dog.name.includes(filterString))
            .map((dog) => (
              <Dog key={dog.id} dog={dog} />
            ))}
        </ul>
      ) : (
        ''
      )}
    </>
  );
}
