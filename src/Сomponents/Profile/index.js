import React, { useState } from 'react';
import './ProfilePage.css';
import logo from '../../assets/svg/Logo.png'; // Replace with the path to your logo image

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="profile-form-container">
            <h1>Профиль</h1>
            <form className="profile-form">
              <div className="form-group">
                <label>Название учебного заведения</label>
                <input type="text" placeholder="Введите название" />
              </div>
              <div className="form-group">
                <label>Количество студентов</label>
                <input type="number" placeholder="Введите количество" />
              </div>
              <div className="form-group">
                <label>Почта</label>
                <input type="email" placeholder="Введите почту" />
              </div>
              <div className="form-group">
                <label>Контактные данные</label>
                <input type="text" placeholder="Введите контактные данные" />
              </div>
              <div className="form-group">
                <label>Город</label>
                <input type="text" placeholder="Введите город" />
              </div>
              <div className="form-group">
                <label>Тип организации</label>
                <div className="radio-group">
                  <label>
                    <input type="radio" name="organizationType" value="private" />
                    Частный
                  </label>
                  <label>
                    <input type="radio" name="organizationType" value="public" />
                    Государственный
                  </label>
                </div>
              </div>
              <button type="submit" className="save-button">Сақтау</button>
            </form>
          </div>
        );
      case 'teachers':
        return (
          <div className="profile-form-container">
            <h1>Преподаватели</h1>
            <p>Здесь вы можете добавить или редактировать информацию о преподавателях.</p>
            <form className="profile-form">
              <div className="form-group">
                <label>Имя преподавателя</label>
                <input type="text" placeholder="Введите имя" />
              </div>
              <div className="form-group">
                <label>Предмет</label>
                <input type="text" placeholder="Введите предмет" />
              </div>
              <div className="form-group">
                <label>Контактные данные</label>
                <input type="text" placeholder="Введите контактные данные" />
              </div>
              <button type="submit" className="save-button">Добавить преподавателя</button>
            </form>
          </div>
        );
      case 'platforms':
        return (
          <div className="profile-form-container">
            <h1>Платформы</h1>
            <p>Здесь вы можете управлять платформами, доступными для студентов и преподавателей.</p>
            <button className="manage-platforms-button">Управление платформами</button>
          </div>
        );
      case 'statistics':
        return (
          <div className="profile-form-container">
            <h1>Статистика</h1>
            <p>Здесь отображается статистика по студентам и преподавателям.</p>
            <div className="statistics-block">
              <p>Общее количество студентов: 5000</p>
              <p>Общее количество преподавателей: 200</p>
              <p>Активные платформы: 12</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-page">
      {/* Top navigation */}
      <header className="top-nav">
        <a href='/' className="menu-button">☰ Переход на сайт</a>
       <svg width="223" height="51" viewBox="0 0 223 51" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.77487 16.6822L0 12.1542V39.3224L7.77487 43.3738V34.3177L22.8534 42.4206V33.3645L7.77487 25.2617V16.6822Z" fill="white"/>
<path d="M15.0785 20.257L8.48168 16.2056L22.8534 8.1028L15.7853 4.0514L22.8534 0L33.9267 6.0771L45 12.1542L37.9319 16.2056L30.1571 12.1542L15.0785 20.257Z" fill="white"/>
<path d="M37.4607 16.6822L30.1571 20.257V38.8458L23.3246 42.4206V51L45 39.3224V34.9135V30.5047L41.466 32.4112L37.9319 34.3177L37.4607 16.6822Z" fill="white"/>
<path d="M77.4734 43H72.0291V12.9583H62V8H87.5025V12.9583H77.4734V43Z" fill="white"/>
<path d="M104.695 8L90.3679 43H96.9585L106.701 18.5L116.157 43H121.888L108.134 8H104.695Z" fill="white"/>
<path d="M152.548 43H130.484V8H135.929V38.3333H152.548V43Z" fill="white"/>
<path d="M173.466 8L159.425 43H165.443L175.185 18.5L185.214 43H190.945L177.191 8H173.466Z" fill="white"/>
<path d="M196.963 8V43H202.407V34.25H211.576C213.869 34.25 215.535 33.571 217.021 32.5011C228.89 23.9525 220.97 8 211.576 8H196.963Z" fill="white"/>
<path d="M202 29V14H210.91C220.808 16.2233 217.035 29 210.91 29H202Z" fill="#113F71"/>
</svg>
        <button className="college-button">Колледж 9</button>
      </header>

      {/* Main content with sidebar and dynamic content */}
      <div className="content">
        <aside className="sidebar">
          <button
            className={`sidebar-button ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Профиль
          </button>
          <button
            className={`sidebar-button ${activeTab === 'teachers' ? 'active' : ''}`}
            onClick={() => setActiveTab('teachers')}
          >
            Преподаватели
          </button>
          <button
            className={`sidebar-button ${activeTab === 'platforms' ? 'active' : ''}`}
            onClick={() => setActiveTab('platforms')}
          >
            Платформы
          </button>
          <button
            className={`sidebar-button ${activeTab === 'statistics' ? 'active' : ''}`}
            onClick={() => setActiveTab('statistics')}
          >
            Статистика
          </button>
        </aside>

        {/* Render the content for the active tab */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Profile;
