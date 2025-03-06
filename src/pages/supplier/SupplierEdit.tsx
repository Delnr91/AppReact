import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams, useRouteMatch } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, closeCircle, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeSupplier, saveSupplier, searchSupplierById, searchSuppliers } from './SupplierApi';
import Supplier from './Supplier';

const SupplierEdit: React.FC = () => {

    const { name } = useParams<{ name: string; }>();

    /* funcion para editar los  vendedores*/
    const [supplier, setSupplier] = useState<Supplier>({});
    const history = useHistory();
    
    const routeMatch: any = useRouteMatch("/page/supplier/:id");
    const id = routeMatch?.params?.id;

    useEffect(() => {
        search();
    }, [history.location.pathname]);

    const search = async() => {
        
        if (id === 'new') {
            setSupplier({});
        } else {
            let result = await searchSupplierById(id);
            setSupplier(result);
        }

    }

    const save = async () => {

        await saveSupplier(supplier);
        history.push('/page/suppliers');
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
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonInput label="Nombre" labelPlacement="stacked"
                                            onIonChange={e => supplier.name = String(e.detail.value)}
                                            placeholder={supplier.name}></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonInput label="Contacto" labelPlacement="stacked"
                                            onIonChange={e => supplier.contact = String(e.detail.value)}
                                            placeholder={supplier.contact}></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonInput label="Email" labelPlacement="stacked"
                                            onIonChange={e => supplier.email = String(e.detail.value)}
                                            placeholder={supplier.email}></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonInput label="Teléfono" labelPlacement="stacked"
                                            onIonChange={e => supplier.phone = String(e.detail.value)}
                                            placeholder={supplier.phone}></IonInput>
                                    </IonItem>

                                </IonCol>
                            </IonRow>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonInput label="Dirección" labelPlacement="stacked"
                                            onIonChange={e => supplier.address = String(e.detail.value)}
                                            placeholder={supplier.address}></IonInput>
                                    </IonItem>
                                </IonCol>
                            </IonRow>

                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonInput label="Web" labelPlacement="stacked"
                                            onIonChange={e => supplier.web = String(e.detail.value)}
                                            placeholder={supplier.web}></IonInput>
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


export default SupplierEdit;