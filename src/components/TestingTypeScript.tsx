
//De esta forma puedo definir los campos que tendrá mi props. Esto es parecido a utilizar propTypes,
// pero tiene la ventaja de que si mando en los props. Un campo con un tipo de dato distinto al que me pide
interface User {
    name: string;
    age: number;

    //Por defecto los campos que indiquemos en la interfaz serán requeridos,
    // pero si queremos indicar que un campo es opcional hacemos esto.
    isMale?: boolean;

    //De esta forma indico una función en mi interfaz. Es necesario también agregar el tipo de dato que
    // retornara mi función, si no retorna nada indicamos que es void.
    sayHello: (message: string, age: number) => void;

    sumTwoNumbers: (number1: number, number2: number) => number;
}

//De esta forma asociamos la interfaz con nuestro props. Los campos definidos en los props deben de tener
// el mismo nombre que en la interfaz, si no esto ocasionara error.
const TestingTypeScript = ({name, age, isMale, sayHello, sumTwoNumbers}: User) => {

    sayHello("Tengo", 15);
    console.debug(sumTwoNumbers(4, 5));

    return (
        <div>
            Nombre: {name} - Edad: {age} - {isMale ? "Hombre" : "Mujer"}
        </div>
    );
};


export default TestingTypeScript;
