export default function Main({
    breed:{name, temperament, origin, bred_for, breed_group, image, life_span},
    showInfo
  }) {

    console.log(name)
    
    return (
      <main>
        {showInfo ? (
          <div className="card">
            <div className="card-info">
                {name && (
                    <div>
                    <h5 className="info-title">Name:</h5>
                    <p>{name}</p>
                </div>
                )}
                {life_span && (
                    <div>
                    <h5 className="info-title">Life span:</h5>
                    <p>{life_span}</p>
                </div>
                )}
                {bred_for && (
                    <div>
                    <h5 className="info-title">Bred for:</h5>
                    <p>{bred_for}</p>
                </div>
                )}
                {breed_group && (
                    <div>
                    <h5 className="info-title">Breed group:</h5>
                    <p>{breed_group}</p>
                </div>
                )}
                { temperament && (
                    <div>
                    <h5 className="info-title">Temperament:</h5>
                    <p>{temperament}</p>
                </div>
                )
                }
                {origin && (
                    <div>
                    <h5 className="info-title">Origin:</h5>
                    <p>{origin}</p>
                </div>
                )}
            </div>
            <img className="card-image" src={image.url} alt="dog pic" />
          </div>
        ) : (
          <h4>Select a breed from the list to get more information</h4>
        )}
      </main>
    );
  }