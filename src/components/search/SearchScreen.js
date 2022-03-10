import { useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation(); //QueryParam vienen en el search 
  const { q = '' } = queryString.parse(location.search);

  const [ { searchText }, handleInputChange ] = useForm({searchText: q});

  const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`, { replace: true });
  };

  return (
    <>
      <h1>Búsquedas</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={ handleSearch }>
              <input 
                type="text"
                placeholder="Buscar un héroe"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ handleInputChange }
              />
              <div className="d-grid gap">
                <button 
                  type="submit"
                  className="btn btn-outline-primary mt-1"
                >
                Buscar...
                </button>
              </div>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            (q === '') 
                ? <div className="alert alert-info">Acá se verán los resultados</div> 
                : ( heroesFiltered.length === 0 ) 
                  && <div className="alert alert-danger">No hay resultados: { q }</div>
          }
          {
            heroesFiltered.map(hero => (
              <HeroCard key={ hero.id } hero={ hero }  />
            ))
          }
        </div>

      </div>
    </>
  )
}
