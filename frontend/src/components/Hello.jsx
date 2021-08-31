import React, { useContext } from 'react'
import Quote from './Quote';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Hello({ setUser }) {
  let history = useHistory();
  //  const user = useContext(UserContext);
  console.log(setUser);

  const deleteUser = () => {

    axios
      .delete('http://localhost:8000/api/deleteuser', {
        headers: {
          token: localStorage.getItem('jwt')
        }
      })
      .then((res) => {
        console.log("Res:", res.data.message)
        localStorage.removeItem('access_token');
        localStorage.removeItem('jwt');
        setUser(null);
        history.push('/');
        history.go(0);
      })
      .catch((err) => console.log(err.response));
  };


  return (
    <div className="hello">
      <h1>Üdvözöllek Azgardban!</h1>
      <h3>Tanulj, olvass, igyál egy sört, érezd jól magad!<br />
        De ne feledd, csak a bátrak jutnak a Valhallába!<br />
        Csakis a félelem meg a tunyaság az ellenséged! <br />
        Vágj bele hát, és találkozunk Odin asztalánál!</h3>
      <Quote />
      <Link to='/basicCourse'>Képzések</Link>
      <button onClick={deleteUser}>
        FIÓK TÖRLÉSE
      </button>
    </div>
  );
}

export default Hello;