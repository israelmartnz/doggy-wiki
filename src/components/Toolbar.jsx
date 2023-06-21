export default function Toolbar({ dogs, selectBreed }) {

    const hasDogs = dogs.length > 0

    return (
      <>
        {
            hasDogs
            ? 
            (
            <div className="toolbar">
                <label>Choose a breed: </label>
                <select className='select' defaultValue='title' onChange={selectBreed}>
                    <option disabled value='title'>-- Breeds --</option>
                    {dogs.map((dog) => (
                        <option value={dog.name} key={dog.id}>
                        {dog.name}
                        </option>
                    ))}
                </select>
            </div>
            )
            : 
            (
                <p>Failed to load dogs list</p>
            )
        }
      </>
    );
  }