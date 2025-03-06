import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import { add, close, closeCircle, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, searchCustomers } from './CustomerApi';
import Customer from './Customer';

const CustomerList: React.FC = (props: any) => {

    /* funcion para cargar listado de clientes*/
    const { name } = useParams<{ name: string; }>();
    const [clientes, setClientes] = useState<Customer[]>([]);
    const history = useHistory();

    useEffect(() => {
        search();
    }, [history.location.pathname]);

    const search = async () => {
        let result = await searchCustomers();
        setClientes(result);

    }
    const remove =  async (id: string) => {
        await removeCustomer(id);
        search();
    }
    const addCustomer = () => {
        history.push('/page/customer/new');
    }
    const editCustomer = (id: string) => {
        history.push('/page/customer/' + id);
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

                {/*Contenido clientes - ion grid (basic usage)*/}
                <IonContent>
                    <IonCard>
                        <IonTitle>Gestión de Clientes</IonTitle>

                        <IonItem>
                            <IonButton onClick={addCustomer} color="primary" fill="solid" slot='end'
                                size='default'>
                                <IonIcon icon={add} />
                                Agregar Cliente
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

                            {clientes.map((cliente: Customer) =>
                                <IonRow key={cliente.id}> {/* Agrega la propiedad key aquí */}
                                    <IonCol>{cliente.firstname}{cliente.lastname}</IonCol>
                                    <IonCol>{cliente.email}</IonCol>
                                    <IonCol>{cliente.phone}</IonCol>
                                    <IonCol>{cliente.address}</IonCol>
                                    <IonCol>
                                        {/*Boton editar*/}
                                        <IonButton color='primary' fill='clear'
                                            onClick={() => editCustomer(String(cliente.id))}>
                                            <IonIcon icon={pencil} slot='icon-only' />
                                        </IonButton>
                                        {/*Boton Eliminar*/}
                                        <IonButton color='danger' fill='clear'
                                            onClick={() => remove(String(cliente.id))}>
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

export default CustomerList;