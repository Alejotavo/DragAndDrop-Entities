
export async function fetchData() {
return new Promise((resolve) => {
    // Simulamos un tiempo de espera de 1 segundo
    setTimeout(() => {
        // Simulamos datos obtenidos del servicio
        const Data = [
        { id: 1, 
          name: 'Diego Ferreira',
          puesto: 'CEO' 
        },
        { id: 2, 
            name: 'Fede del Ponte',
            puesto: 'CEO' 
        },
        { id: 3, 
        name: 'La Mona Jimenez',
        puesto: 'Cantante' 
        },
        { id: 4, 
            name: 'Ricky Maravilla',
            puesto: 'Cantante' 
            },
        ];
        resolve(Data);
    }, 1000);
    });
}