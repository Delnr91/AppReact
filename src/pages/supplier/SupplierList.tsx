import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, closeCircle, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeSupplier, searchSuppliers } from './SupplierApi';
import Supplier from './Supplier';

    const SupplierList: React.FC = (props: any) => {
        const { name } = useParams<{ name: string; }>();
        const [proveedores, setSuppliers] = useState<Supplier[]>([]);
        const history = useHistory();
      
        useEffect(() => {
          search();
        }, [history.location.pathname]);
      
        const search = async () => {
          let result = await searchSuppliers();
          setSuppliers(result);
        }
      
        const remove = async (id: string) => {
          await removeSupplier(id);
          search();
        }
      
        const addSupplier = () => {
          history.push('/page/supplier/new');
        }
      
        const editSupplier = (id: string) => {
          history.push('/page/supplier/' + id);
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
                            <IonButton onClick={addSupplier} color="primary" fill="solid" slot='end'
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
                                <IonCol>Web</IonCol>
                                <IonCol>Acciones</IonCol>
                            </IonRow>

                            {proveedores.map((proveedor: Supplier) =>
                                <IonRow key={proveedor.id}> {/* Agrega la propiedad key aquí */}
                                    <IonCol>{proveedor.name}{proveedor.name}</IonCol>
                                    <IonCol>{proveedor.email}</IonCol>
                                    <IonCol>{proveedor.phone}</IonCol>
                                    <IonCol>{proveedor.web}</IonCol>
                                    <IonCol>
                                        {/*Boton editar*/}
                                        <IonButton color='primary' fill='clear'
                                        onClick={() => editSupplier(String(proveedor.id))}>
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

export default SupplierList;  