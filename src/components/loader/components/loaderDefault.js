import React from 'react';
import './loaderDefault.css';
import Spinner from './spinner';

const LoaderDefault = (props) => (
    <div className="LoadingTitle">
        <h1> Cargando </h1>
        <Spinner />
    </div>
)

export default LoaderDefault;