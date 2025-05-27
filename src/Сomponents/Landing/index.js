import React from 'react';
import './Landing.css'
import image1 from '../../assets/svg/image1.png';
import image2 from '../../assets/svg/image2.png';
import image3 from '../../assets/svg/image3.png';
import { ReactComponent as DesignIcon } from '../../assets/svg/icon1.svg'; // Replace with actual SVG paths
import { ReactComponent as DevelopmentIcon } from '../../assets/svg/icon1.svg';
import { ReactComponent as MarketingIcon } from '../../assets/svg/icon1.svg';
const platforms = [
    { id: 1, name: 'Конструктор образовательных программ', icon: <DesignIcon /> },
    { id: 2, name: 'Реестр образовательных программ',href: 'http://reestr24.talap.edu.kz/requests', icon: <DevelopmentIcon /> },
    { id: 3, name: 'Система дистанционного обучения педагогов колледжей', href: 'http://lms.talap.edu.kz/', icon: <MarketingIcon /> },
    { id: 4, name: 'Карта развития педагогов', icon: <DevelopmentIcon /> }, // Replace icon
    { id: 5, name: 'Платформа открытого обмена и инноваций', icon: <DevelopmentIcon /> }, // Replace icon
    { id: 6, name: 'Единая система методической работы', icon: <DevelopmentIcon /> }, // Replace icon
    { id: 7, name: 'Платформа профориентации и рекрутинга', icon: <DevelopmentIcon /> }, // Replace icon
    { id: 8, name: 'Информационная карта организации ТиПО', href: 'http://map.talap.edu.kz/map',icon: <DevelopmentIcon /> }, // Replace icon
    { id: 9, name: 'Система рейтинга и ранжирования колледжей',  icon: <DevelopmentIcon /> }, // Replace icon
  ];
const Landing = () => {
    const newsItems = [
        {
          id: 1,
          image: image1, // Replace with actual image paths
          title: 'Педагогтерге арналған жаңашыл курс!',
          description:
            '«SCAFFOLD құралдарын пайдаланып оқу сабақтарын жобалау» тақырыбындағы біліктілікті арттыру курсы басталды...',
          date: '26.05.2025',
        },
        {
          id: 2,
          image: image2, // Replace with actual image paths
          title: 'Құрметті қазақстандықтар!',
          description:
            'Сіздерді еліміздің ең маңызды мерекесі - Конституция күнімен құттықтаймыз! Осыдан жиырма бес жыл бұрын',
          date: '02.11.2024',
        },
        {
          id: 3,
          image: image3, // Replace with actual image paths
          title: 'Курс повышения квалификации в сфере автомобильного...',
          description:
            'В городе Костанай на базе завода Allur стартовали курсы повышения квалификации «Совершенствование ...',
          date: '02.11.2024',
        },
      ];
 return(
  <div>
     <section className='stats'>
        <div className='template'>
            <div className='left'>
                <h2>Показатели <span>компании</span><svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.1167 12.0938V12.8104H36.55V12.0938C36.55 10.0872 38.1268 8.51043 40.1333 8.51043V7.0771C38.1268 7.0771 36.55 5.50029 36.55 3.49377V2.7771H35.1167V3.49377C35.1167 5.50029 33.5399 7.0771 31.5333 7.0771V8.51043C33.5399 8.51043 35.1167 10.0872 35.1167 12.0938ZM35.8333 6.07384C36.2634 6.7905 36.8366 7.3637 37.5533 7.79377C36.8366 8.22384 36.2634 8.79703 35.8333 9.5137C35.4033 8.79703 34.8301 8.22384 34.1134 7.79377C34.8301 7.3637 35.4033 6.7905 35.8333 6.07384Z" fill="#113F71"/>
<path d="M3.58333 26.4271V27.1437H5.01667V26.4271C5.01667 24.4206 6.59347 22.8437 8.6 22.8437V21.4104C6.59347 21.4104 5.01667 19.8336 5.01667 17.8271V17.1104H3.58333V17.8271C3.58333 19.8336 2.00653 21.4104 0 21.4104V22.8437C2.00653 22.8437 3.58333 24.4206 3.58333 26.4271ZM4.3 20.4071C4.73007 21.1238 5.30326 21.697 6.01993 22.1271C5.30326 22.5571 4.73007 23.1303 4.3 23.847C3.86993 23.1303 3.29674 22.5571 2.58007 22.1271C3.29674 21.697 3.86993 21.1238 4.3 20.4071Z" fill="#113F71"/>
<path d="M8.16993 15.0321L9.675 15.1753C9.10181 14.4586 8.6 13.5988 8.24167 12.7387L7.2384 10.3021C6.09167 10.8753 5.58986 12.1655 6.01993 13.3836C6.30653 14.3155 7.16667 14.9604 8.16993 15.0321Z" fill="#113F71"/>
<path d="M9.53151 12.2372C10.6065 15.0321 13.1866 16.9669 16.125 17.1821L19.35 17.4687L20.0666 19.2604L22.6467 18.1854L22.0018 16.4655L24.2232 13.8854C26.0148 11.8071 26.5884 8.86873 25.7282 6.28867L24.1518 1.5586C24.0801 1.41547 23.9366 1.272 23.7935 1.12888C23.65 1.05714 23.4351 1.05714 23.2199 1.12888L8.09818 6.57526C7.73985 6.71874 7.52499 7.14881 7.66846 7.50714L9.53151 12.2372ZM22.0732 3.1354C22.2166 3.422 25.9435 9.37054 22.0018 13.3122L20.9982 12.3086C24.1518 9.15533 20.9268 3.92381 20.9268 3.85207L22.0732 3.1354Z" fill="#113F71"/>
<path d="M27.5199 7.86548L28.3801 6.79048C29.1685 5.78722 29.0967 4.35389 28.0935 3.49375C27.95 3.35027 27.7351 3.20715 27.5199 3.13541C27.0899 2.92055 26.5884 2.92055 26.1583 2.99194L27.0899 5.78722C27.3051 6.43215 27.4482 7.14882 27.5199 7.86548Z" fill="#113F71"/>
<path d="M26.5884 32.7336L32.25 29.9387C32.6083 29.7956 32.7518 29.3655 32.6083 29.0789L32.25 28.147L28.8815 29.2938L28.4518 27.9322L31.7482 26.8572L30.8884 24.5637L27.4482 25.7104L27.0185 24.3488L30.3866 23.2021L29.5268 20.9086L26.0149 22.0554L25.5851 20.6938L29.0967 19.547L28.5232 18.042C28.3801 17.6836 27.95 17.4688 27.5917 17.6122L19.6366 21.0521C19.4217 21.1238 19.2783 21.3387 19.2065 21.5539L18.6333 24.2054L21.2851 32.1604L26.1583 32.7336C26.3018 32.8771 26.4449 32.8054 26.5884 32.7336Z" fill="#113F71"/>
<path d="M26.0866 34.2387L27.0185 36.9622L29.5982 36.1021L28.4518 33.4503L27.2333 34.0238C26.875 34.2387 26.4449 34.3104 26.0866 34.2387Z" fill="#113F71"/>
<path d="M33.3967 37.392H30.5301L27.4482 38.3956L25.0116 40.6887C24.7967 40.9039 24.725 41.1905 24.8685 41.4771L25.0116 41.9072L34.1851 38.2521L34.0417 37.822C33.8982 37.5354 33.6833 37.392 33.3967 37.392Z" fill="#113F71"/>
<path d="M14.5482 26.2836L16.4116 31.9456L15.1217 32.3753L13.2583 26.7854L11.6101 27.4304L14.1185 34.9554L19.9232 32.447L17.4866 25.2086L14.5482 26.2836Z" fill="#113F71"/>
<path d="M1.43335 31.2289V40.4021L12.7565 35.5289L10.2482 27.9321L1.43335 31.2289Z" fill="#113F71"/>
<path d="M39.4167 17.8271V17.1104H37.9833V17.8271C37.9833 19.8336 36.4065 21.4104 34.4 21.4104V22.8437C36.4065 22.8437 37.9833 24.4206 37.9833 26.4271V27.1437H39.4167V26.4271C39.4167 24.4206 40.9935 22.8437 43 22.8437V21.4104C40.9935 21.4104 39.4167 19.8336 39.4167 17.8271ZM38.7 23.847C38.2699 23.1303 37.6967 22.5571 36.9801 22.1271C37.6967 21.697 38.2699 21.1238 38.7 20.4071C39.1301 21.1238 39.7032 21.697 40.4199 22.1271C39.7032 22.5571 39.1301 23.1303 38.7 23.847Z" fill="#113F71"/>
</svg>
</h2>
                <p>здесь будет текстовое описание по показателям, по статистике компании</p>
            </div>
            <div className='right'>
                <div>
                <p>Студентов</p>
                <a>505240</a>
                </div>
                <div>
                <p>Учебных заведении</p>
                <a>757</a>
                <a>Частные: 315<br></br>
Государственные: 442</a>
                </div>
            </div>

        </div>
     </section>
     <div className="platforms-container">
      <h2 className="title">Наши платформы</h2>
      <div className="platforms-grid">
        {platforms.map((platform) => (
          <div key={platform.id} className="platform-card">
            <div className="icon">{platform.icon}</div>
            <a className='platform-href' href={platform.href}><span className="platform-name">{platform.name}</span></a>
            <span className="arrow">→</span>
          </div>
        ))}
      </div>
    </div>
     <div className="news-block-container">
      <div className="news-header">
        <h2>Новости</h2>
        <a href="#!" className="view-all">
          показать все
        </a>
      </div>
      <div className="news-grid">
        {newsItems.map((item) => (
          <div key={item.id} className="news-card">
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-description">{item.description}</p>
              <p className="news-date">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
    <footer className="footer-container">
      <div className="footer-top">
        <nav className="footer-nav">
          <a href="#about">О компании</a>
          <a href="#news">Новости</a>
          <a href="#platforms">Платформы</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <nav className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </nav>
      </div>
      <div className="footer-middle">
        <div className="footer-contacts">
          <a href='mailto:info@talap.edu.kz' className="email">info@talap.edu.kz</a><br></br>
          <a href='mailto:help@talap.edu.kz' className="email">help@talap.edu.kz</a>
          <p>+7 (7172) 79 78 88</p>
          <p>010000, Республика Казахстан</p>
          <p>Астана қаласы, Мәңгілік Ел 34, 7 қабат</p>
        </div>
        <div className="footer-logo">
        <svg width="252" height="69" viewBox="0 0 252 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5393 22.5701L0 16.4439V53.2009L10.5393 58.6822V46.4299L30.9791 57.3925V45.1402L10.5393 34.1776V22.5701Z" fill="white"/>
<path d="M20.4398 27.4065L11.4974 21.9252L30.9791 10.9626L21.3979 5.48131L30.9791 0L45.9895 8.22196L61 16.4439L51.4188 21.9252L40.8796 16.4439L20.4398 27.4065Z" fill="white"/>
<path d="M50.7801 22.5701L40.8796 27.4065V52.5561L31.6178 57.3925V69L61 53.2009V47.236V41.271L56.2094 43.8505L51.4188 46.4299L50.7801 22.5701Z" fill="white"/>
<path d="M106.473 53H101.029V22.9583H91V18H116.502V22.9583H106.473V53Z" fill="white"/>
<path d="M133.695 18L119.368 53H125.958L135.701 28.5L145.157 53H150.888L137.134 18H133.695Z" fill="white"/>
<path d="M181.548 53H159.484V18H164.929V48.3333H181.548V53Z" fill="white"/>
<path d="M202.466 18L188.425 53H194.443L204.185 28.5L214.214 53H219.945L206.191 18H202.466Z" fill="white"/>
<path d="M225.963 18V53H231.407V44.25H240.576C242.869 44.25 244.535 43.571 246.021 42.5011C257.89 33.9525 249.97 18 240.576 18H225.963Z" fill="white"/>
<path d="M232 39V24H240.91C250.808 26.2233 247.035 39 240.91 39H232Z" fill="#113F71"/>
</svg>

        </div>
        <div className="footer-legal">
          <p>© 2024. НАО «Талап». Все права защищены</p>
          <a href="#privacy-policy">Политика конфиденциальности</a>
          <a href="#cookie-policy">Политика в отношении файлов cookie</a>
          <a href="#terms">Условия эксплуатации</a>
        </div>
      </div>
    </footer>
  </div>
 )
}

export default Landing;