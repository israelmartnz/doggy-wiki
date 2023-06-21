export default function Toolbar({ dogs, selectBreed }) {

    return (
      <>
            <div className="toolbar">
                <label>Choose a breed: </label>
                <select className='select' defaultValue='title' onChange={selectBreed}>
                    <option disabled value='title'>-- Breeds --</option>
                    {dogs.map((dog) => (
                        <option className="option" value={dog.name} key={dog.id}>
                        {dog.name}
                        </option>
                    ))}
                </select>
            </div>
      </>
    );
  }