import React from 'react';
import Hero from './Сomponents/Hero';
import Landing from './Сomponents/Landing';

const App = () => {
 return(

  <div className='main-content'>
    <Hero/>
    <Landing/>
    <div class="unsupported-resolution-message">
    Ваше устройство не поддерживает отображение сайта при ширине экрана меньше 1100px. Пожалуйста, используйте устройство с большим экраном.
  </div>
  </div>
 )
}

export default App;