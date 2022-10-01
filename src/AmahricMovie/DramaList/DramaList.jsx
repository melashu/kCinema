import React from 'react'
import { Link } from 'react-router-dom';
import {
  getEthioDramas,
} from "../../Redux/MovieSlices";
import { useSelector } from 'react-redux';
import Cards from '../Cards/Card';

const DramaList = () => {
  const dramas = useSelector(getEthioDramas);

    return (
      <>
        <h1 className="am-title">Ethiopian Drama</h1>
        <div className="am-container">
          {dramas.map((drama, index) => (
            <Link key={index + 1} to={`/amaharic/${drama.id}`}>
              <Cards key={index} data={drama} />
            </Link>
          ))}
        </div>
      </>
    );
}

export default DramaList