interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}



export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendientes: Lorem et irure deserunt dolor qui quis ex ut.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En-progreso: Aliqua in minim ullamco ut mollit.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },{
            description: 'Terminadas: Mollit consectetur nostrud ex laboris ullamco consequat.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        }
    ]
}
