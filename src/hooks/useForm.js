import { useState, useEffect } from "react";

const useForm = (initialState, languagesList, interestsList) => {
    /* 
        Custom Hook que gestiona los estados de cualquier formulario, con cualquier tamaño.
        Necesita como estado inicial un objeto que tenga tantas propiedades
        como inputs tenga el formulario. Además, deberán ser iguales los nombres
        de las propiedades del obj con las etiquetas "name" de los inputs.
    */
    const [form, setForm] = useState(initialState);

    const handleInputChange = e => {
        /*
            Utilizada por todos los inputs del formulario en cada cambio.
            Diferencia el responsable del cambio gracias a su atributo "name".
        */

        const inputName = e.target.name;
        const inputValue = e.target.value;

        setForm(previousState => {
            /* Actualiza sólo la propiedad correspondiente al input específico */
            return {...previousState, [inputName]: inputValue}
        });
    }

    //Gestionar estado de idiomas
    const [langCheckedState, setLangCheckedState] = useState();
    useEffect(() => setLangCheckedState(new Array(languagesList.length).fill(false)), [languagesList]);

    const handleLangCheckboxChange = (position) => {
        const updatedlangCheckedState = langCheckedState.map((item, index) =>
        index === position ? !item : item
        );
        setLangCheckedState(updatedlangCheckedState);
        console.log("langCheckedState: "+langCheckedState)

    const langIdsArrayTemp = [];
    updatedlangCheckedState.map(
    (state, index) => {
        if (state === true) {
        langIdsArrayTemp.push(languagesList[index].id);
        }
        return 0;
    }
    );

    setForm(previousState => {
        return {...previousState, 'languages': langIdsArrayTemp}
    });
    };

    //Gestionar estado de intereses
    const [intCheckedState, setIntCheckedState] = useState();
        useEffect(() => setIntCheckedState(new Array(interestsList.length).fill(false)), [interestsList]);
    
    const handleIntCheckboxChange = (position) => {
        const updatedintCheckedState = intCheckedState.map((item, index) =>
        index === position ? !item : item
        );
        setIntCheckedState(updatedintCheckedState);
        console.log("intCheckedState: "+intCheckedState)

    const intIdsArrayTemp = [];
    updatedintCheckedState.map(
    (state, index) => {
        if (state === true) {
        intIdsArrayTemp.push(interestsList[index].id);
        }
        return 0;
    }
    );
    console.log('idsArrayTemp: '+intIdsArrayTemp);

    setForm(previousState => {
        return {...previousState, 'interests': intIdsArrayTemp}
    });
    };

    /*
        Decidimos que devuelva el estado (objeto form) y la función
        que actualiza una propiedad individual, en lugar del setForm
     */
    return [form, handleInputChange, handleLangCheckboxChange, langCheckedState, handleIntCheckboxChange, intCheckedState];
}

export {useForm};