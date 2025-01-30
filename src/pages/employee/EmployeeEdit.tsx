import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, closeCircle, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeEmployee, saveEmployee, searchEmployeeById, searchEmployees } from './EmployeeApi';
import Employee from './Employee';

const EmployeeEdit: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string; }>();

    /* funcion para editar los  clientes*/
    const [employee, setEmployee] = useState<Employee>({});
    const history = useHistory();

    useEffect(() => {
        search();
    }, []);

    const search = () => {
        if(id !== 'new'){
            let result = searchEmployeeById(id);
            setEmployee(result);
        }
        
    }

    const save = () => {
        
        saveEmployee(employee);
        history.push('/page/employees');
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

                {/*Contenido Edicion Empleado - ion-input(stocked-label)*/}
                <IonContent>
                    <IonCard>
                        <IonTitle>{id === 'new' ? 'Agregar Empleado' : 'Editar Empleado'}</IonTitle>

                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonInput label="Nombre" labelPlacement="stacked"
                                        onIonChange={e => employee.firstname = String(e.detail.value)} 
                                        placeholder={employee.firstname}></IonInput>
                                </IonItem>
                            </IonCol>

                            <IonCol>
                                <IonItem>
                                    <IonInput label="Apellido" labelPlacement="stacked"
                                           onIonChange={e => employee.lastname = String(e.detail.value)} 
                                           placeholder={employee.lastname}></IonInput>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <IonItem>
                                    <IonInput label="Email" labelPlacement="stacked"
                                          onIonChange={e => employee.email = String(e.detail.value)} 
                                          placeholder={employee.email}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem>
                                    <IonInput label="Teléfono" labelPlacement="stacked"
                                            onIonChange={e => employee.phone = String(e.detail.value)} 
                                            placeholder={employee.phone}></IonInput>
                                </IonItem>
                            </IonCol>
                            <IonRow>
                                <IonCol>
                                    <IonItem>
                                        <IonInput label="Dirección" labelPlacement="stacked"
                                               onIonChange={e => employee.address = String(e.detail.value)} 
                                               placeholder={employee.address}></IonInput>
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


export default EmployeeEdit;