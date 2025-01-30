import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, closeCircle, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, saveCustomer, searchCustomerById, searchCustomers } from './CustomerApi';
import Customer from './Customer';

const CustomerEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string; }>();

    /* funcion para editar los  clientes*/
    const [customer, setCustomer] = useState<Customer>({});
    const history = useHistory();

    useEffect(() => {
        search();
    }, []);

    const search = () => {
        if(id !== 'new'){
            let result = searchCustomerById(id);
            setCustomer(result);
        }
        
    }

    const save = () => {
        
        saveCustomer(customer);
        history.push('/page/customers');
    }
   

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">{name}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/*Contenido Edicion clientes - ion-input(stocked-label)*/}
                <IonContent>
                    <IonCard>
                        <IonTitle>{id === 'new' ? 'Agregar Cliente' : 'Editar Cliente'}</IonTitle>

                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonInput label="Nombre" labelPlacement="stacked"
                                        onIonChange={e => customer.firstname = String(e.detail.value)} 
                                        placeholder={customer.firstname}></IonInput>
                                </IonItem>
                            </IonCol>

                            <IonCol>
                                <IonItem>
                                    <IonInput label="Apellido" labelPlacement="stacked"
                                           onIonChange={e => customer.lastname = String(e.detail.value)} 
                                           placeholder={customer.lastname}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonInput label="Email" labelPlacement="stacked"
                                          onIonChange={e => customer.email = String(e.detail.value)} 
                                          placeholder={customer.email}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonInput label="Teléfono" labelPlacement="stacked"
                                            onIonChange={e => customer.phone = String(e.detail.value)} 
                                            placeholder={customer.phone}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonInput label="Dirección" labelPlacement="stacked"
                                               onIonChange={e => customer.address = String(e.detail.value)} 
                                               placeholder={customer.address}></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                        </IonRow>

                        <IonItem>
                            <IonButton onClick={save} color="success" fill="solid" slot='end'
                                size='default'>
                                <IonIcon icon={checkmark} />
                                Guardar
                            </IonButton>
                        </IonItem>


                    </IonCard>
                </IonContent>
            </IonContent>

        </IonPage >
    );
};


export default CustomerEdit;