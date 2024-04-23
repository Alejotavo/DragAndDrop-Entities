
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
            name: 'Joaquin Diaz',
            puesto: 'Developer' 
        },
        { id: 3, 
            parentId: null,
            name: 'Juan Arrivillaga',
            puesto: 'Project Manager' 
        },
        { id: 4, 
            parentId: null,
            name: 'Federico Del Ponte',
            puesto: 'CEO' 
        },
        { id: 5, 
            parentId: 4,
            name: 'Alejo Francomano',
            puesto: 'Developer' 
        },
        { id: 6, 
            parentId: 8,
            name: 'Lucas Mangano',
            puesto: 'Developer' 
        },
        { id: 7, 
            parentId: 4,
            name: 'Jorge Viale',
            puesto: 'Developer' 
        },
        { id: 8, 
            parentId: 7,
            name: 'Marcos Basualdo',
            puesto: 'Developer' 
        }
        ];
        resolve(Data);
    }, 1000);
    });
}