import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, closeCircle, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeEmployee, searchEmployees } from './EmployeeApi';
import Employee from './Employee';

const EmployeeList: React.FC = (props: any) => {

    /* funcion para cargar listado de empleados*/
    const { name } = useParams<{ name: string; }>();
    const [empleados, setEmpleados] = useState<Employee[]>([]);
    const history = useHistory();

    useEffect(() => {
        search();
    }, [history.location.pathname]);

    const search = async () => {
        let result = await searchEmployees();
        setEmpleados(result);

    }
    const remove = async (id: string) => {
        await removeEmployee(id);
        search();
    }
    const addEmployee = () => {
        history.push('/page/employee/new');
    }
    const editEmployee = (id: string) => {
        history.push('/page/employee/' + id);
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

                {/*Contenido empleados - ion grid (basic usage)*/}
                <IonContent>
                    <IonCard>
                        <IonTitle>Gestión de Empleados</IonTitle>

                        <IonItem>
                            <IonButton onClick={addEmployee} color="primary" fill="solid" slot='end'
                                size='default'>
                                <IonIcon icon={add} />
                                Agregar Empleado
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

                            {empleados.map((empleado: Employee) =>
                               <IonRow key={empleado.id}> {/* Agrega la propiedad key aquí */}
                                    <IonCol>{empleado.firstname}{empleado.lastname}</IonCol>
                                    <IonCol>{empleado.email}</IonCol>
                                    <IonCol>{empleado.phone}</IonCol>
                                    <IonCol>{empleado.address}</IonCol>
                                    <IonCol>
                                        {/*Boton editar*/}
                                        <IonButton color='primary' fill='clear'
                                        onClick={() => editEmployee(String(empleado.id))}>
                                            <IonIcon icon={pencil} slot='icon-only' />
                                        </IonButton>
                                        {/*Boton Eliminar*/}
                                        <IonButton color='danger' fill='clear'
                                            onClick={() => remove(String(empleado.id))}>
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

export default EmployeeList;  