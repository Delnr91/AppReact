import {
  IonContent,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp,
        mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp,
         warningOutline, warningSharp, personAdd, personAddOutline } from 'ionicons/icons';
import './Menu.css';
import LogoImg from '../images/logo.png';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Clientes',
    url: '/page/customers',
    iosIcon: personAddOutline,
    mdIcon: personAdd
  },

  {
    title: 'Empleados',
    url: '/page/employees',
    iosIcon: personAddOutline,
    mdIcon: personAdd
  },

  {
    title: 'Proveedor',
    url: '/page/suppliers',
    iosIcon: personAddOutline,
    mdIcon: personAdd
  },
  
];


const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>
            <IonImg src={LogoImg}/>
          </IonListHeader>
          
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        
      </IonContent>
    </IonMenu>
  );
};

export default Menu;