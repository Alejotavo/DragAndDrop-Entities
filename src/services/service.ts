
export async function fetchData() {
return new Promise((resolve) => {
    // Simulamos un tiempo de espera de 1 segundo
    setTimeout(() => {
        // Simulamos datos obtenidos del servicio
        const Data = [
        { id: 1, 
            parentId: null,
            name: 'Diego Ferreira',
            puesto: 'CEO' 
        },
        { id: 2, 
            parentId: 1,
            name: 'Marco Aurelio',
            puesto: 'Filosofo' 
        },
        { id: 3, 
            parentId: null,
            name: 'La Mona Jimenez',
            puesto: 'Cantante' 
        },
        { id: 4, 
            parentId: null,
            name: 'Ricky Maravilla',
            puesto: 'Cantante' 
        },
        { id: 5, 
            parentId: 4,
            name: 'Silvio Rodriguez',
            puesto: 'Cantante' 
        },
        { id: 6, 
            parentId: 4,
            name: 'Pepe Medina',
            puesto: 'Escritor' 
        },
        { id: 5, 
            parentId: 4,
            name: 'Manolo Alonzo',
            puesto: 'Surfista' 
        },
        ];
        resolve(Data);
    }, 1000);
    });
}