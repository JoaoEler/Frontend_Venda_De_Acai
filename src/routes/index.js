import React from 'react';
import { Switch, Route } from 'react-router-dom';

import escolha from '../pages/Escolha';
import personalize from '../pages/Personalizar';
//import resumo from '../pages/Resumo';



//<Route path="/finalizar" exact component={resumo} />

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={escolha} />

        <Route path="/personalizar" exact component={personalize} />

      </Switch>
    </>
  );
};

export default Routes;
