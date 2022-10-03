import TestingTypeScript from "./components/TestingTypeScript";
import {useEffect, useState} from "react";

function App() {

    //Con los useState no es necesario especificar el tipo de dato. Pues si defino el initialState.
    // TypeScript hará inferencia sobre cuál es el tipo de dato de mi estado.
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [isMale, setIsMale] = useState(false);

    //Si intento cambiar el estado, por un tipo de dato que no sea string tendré error de compilación.
    // setName(1);


    //De esta forma definimos los tipos de datos que tendrán los parametros de esta función. Y también,
    // lo que retorna la función. Si no retorna nada le indicamos que es void
    const sayHello = (message: string, age: number): void => {

        console.debug(message + " " + age + " años");
    };


    //Aqui indico tipo de dato number. Esto obliga a que la función retorne un numero, sino lo hace habrá error de
    // compilación.
    const sumTwoNumbers = (number1: number, number2: number): number => {

        return number1 + number2;
    };


    useEffect(() => {

        setName("El pepe");
        setAge(23);
        setIsMale(true);

    }, []);


    return (
    <>
      <TestingTypeScript name={name} age={age} isMale={isMale} sayHello={sayHello} sumTwoNumbers={sumTwoNumbers}/>
    </>
  );
}

export default App;
