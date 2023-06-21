export default function Main({
    breed:{name, temperament, origin, bred_for, breed_group, image, life_span},
    showInfo
  }) {

    console.log(name)
    
    return (
      <>
        {showInfo ? (
          <div className="card">
            <div className="card-content">
                {name && (
                    <div>
                    <h5 className="card-heading">Name:</h5>
                    <p className="card-info">{name}</p>
                </div>
                )}
                {life_span && (
                    <div>
                    <h5 className="card-heading">Life span:</h5>
                    <p className="card-info">{life_span}</p>
                </div>
                )}
                {bred_for && (
                    <div>
                    <h5 className="card-heading">Bred for:</h5>
                    <p className="card-info">{bred_for}</p>
                </div>
                )}
                {breed_group && (
                    <div>
                    <h5 className="card-heading">Breed group:</h5>
                    <p className="card-info">{breed_group}</p>
                </div>
                )}
                { temperament && (
                    <div>
                    <h5 className="card-heading">Temperament:</h5>
                    <p className="card-info">{temperament}</p>
                </div>
                )
                }
                {origin && (
                    <div>
                    <h5 className="card-heading">Origin:</h5>
                    <p className="card-info">{origin}</p>
                </div>
                )}
            </div>
            <img className="card-image" src={image.url} alt="dog pic" />
          </div>
        ) : (
          <h4>Select a breed from the list to get more information</h4>
        )}
      </>
    );
  }