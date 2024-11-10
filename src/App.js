import React, { useState, useEffect } from 'react';
import Hero from './Сomponents/Hero';
import Landing from './Сomponents/Landing';

const App = () => {
  const [isSupportedResolution, setIsSupportedResolution] = useState(true);

  // Проверка ширины экрана
  useEffect(() => {
    const checkScreenWidth = () => {
      setIsSupportedResolution(window.innerWidth >= 1100);
    };

    // Проверка при загрузке
    checkScreenWidth();

    // Обработчик события изменения размера экрана
    window.addEventListener('resize', checkScreenWidth);
    return () => window.removeEventListener('resize', checkScreenWidth);
  }, []);

  return (
    <div>
      {isSupportedResolution ? (
        <div style={styles.mainContent}>
          <Hero />
          <Landing />
        </div>
      ) : (
        <div style={styles.unsupportedResolutionMessage}>
          Ваше устройство не поддерживает отображение сайта при ширине экрана меньше 1100px. Пожалуйста, используйте устройство с большим экраном.
        </div>
      )}
    </div>
  );
};

const styles = {
  mainContent: {
    display: 'block',
  },
  unsupportedResolutionMessage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontSize: '20px',
    color: '#333',
    textAlign: 'center',
    padding: '20px',
  },
};

export default App;
