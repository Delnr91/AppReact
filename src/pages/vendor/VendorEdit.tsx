import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, closeCircle, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeVendor, saveVendor, searchVendorById, searchVendors } from './VendorApi';
import Vendor from './Vendor';

const VendorEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string; }>();

    /* funcion para editar los  vendedores*/
    const [vendor, setVendor] = useState<Vendor>({});
    const history = useHistory();

    useEffect(() => {
        search();
    }, []);

    const search = () => {
        if(id !== 'new'){
            let result = searchVendorById(id);
            setVendor(result);
        }
        
    }

    const save = () => {
        
        saveVendor(vendor);
        history.push('/page/vendors');
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

                {/*Contenido Edicion Proveedor - ion-input(stocked-label)*/}
                <IonContent>
                    <IonCard>
                        <IonTitle>{id === 'new' ? 'Agregar Proveedor' : 'Editar Proveedor'}</IonTitle>

                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonInput label="Nombre" labelPlacement="stacked"
                                        onIonChange={e => vendor.firstname = String(e.detail.value)} 
                                        placeholder={vendor.firstname}></IonInput>
                                </IonItem>
                            </IonCol>

                            <IonCol>
                                <IonItem>
                                    <IonInput label="Apellido" labelPlacement="stacked"
                                           onIonChange={e => vendor.lastname = String(e.detail.value)} 
                                           placeholder={vendor.lastname}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonInput label="Email" labelPlacement="stacked"
                                          onIonChange={e => vendor.email = String(e.detail.value)} 
                                          placeholder={vendor.email}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonInput label="Teléfono" labelPlacement="stacked"
                                            onIonChange={e => vendor.phone = String(e.detail.value)} 
                                            placeholder={vendor.phone}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonInput label="Dirección" labelPlacement="stacked"
                                               onIonChange={e => vendor.address = String(e.detail.value)} 
                                               placeholder={vendor.address}></IonInput>
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


export default VendorEdit;