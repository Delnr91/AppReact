import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, closeCircle, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeVendor, searchVendors } from './VendorApi';
import Vendor from './Vendor';

const VendorList: React.FC = () => {

    /* funcion para cargar listado de proveedores*/
    const { name } = useParams<{ name: string; }>();
    const [proveedores, setProveedores] = useState<Vendor[]>([]);
    const history = useHistory();

    useEffect(() => {
        search();
    }, [history.location.pathname]);

    const search = () => {
        let result = searchVendors();
        setProveedores(result);

    }
    const remove = (id: string) => {
        removeVendor(id);
        search();
    }
    const addVendor = () => {
        history.push('/page/vendor/new');
    }
    const editVendor = (id: string) => {
        history.push('/page/vendor/' + id);
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

                {/*Contenido proveedores - ion grid (basic usage)*/}
                <IonContent>
                    <IonCard>
                        <IonTitle>Gestión de Proveedores</IonTitle>

                        <IonItem>
                            <IonButton onClick={addVendor} color="primary" fill="solid" slot='end'
                                size='default'>
                                <IonIcon icon={add} />
                                Agregar Proveedor
                            </IonButton>
                        </IonItem>

                        <IonGrid className="table">
                            <IonRow >
                                <IonCol>Nombre</IonCol>
                                <IonCol>Email</IonCol>
                                <IonCol>Teléfono</IonCol>
                                <IonCol>Dirección</IonCol>
                                <IonCol>Acciones</IonCol>
                            </IonRow>

                            {proveedores.map((proveedor: Vendor) =>
                                <IonRow>
                                    <IonCol>{proveedor.firstname}{proveedor.lastname}</IonCol>
                                    <IonCol>{proveedor.email}</IonCol>
                                    <IonCol>{proveedor.phone}</IonCol>
                                    <IonCol>{proveedor.address}</IonCol>
                                    <IonCol>
                                        {/*Boton editar*/}
                                        <IonButton color='primary' fill='clear'
                                        onClick={() => editVendor(String(proveedor.id))}>
                                            <IonIcon icon={pencil} slot='icon-only' />
                                        </IonButton>
                                        {/*Boton Eliminar*/}
                                        <IonButton color='danger' fill='clear'
                                            onClick={() => remove(String(proveedor.id))}>
                                            <IonIcon icon={close} slot='icon-only' />
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            )}


                        </IonGrid>
                    </IonCard>
                </IonContent>
            </IonContent>

        </IonPage>
    );
};

export default VendorList;  