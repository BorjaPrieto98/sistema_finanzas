import { Item } from '../types/Item';

export const items: Item[] = [
    {   
        date: new Date(2021, 7, 15), 
        category: 'food', 
        title: 'McDonalds', 
        value: 32.12 
    },
    {   
        date: new Date(2021, 1, 15), 
        category: 'food', 
        title: 'Burger', 
        value: 20   
    },
    {   
        date: new Date(2021, 9, 15), 
        category: 'rent', 
        title: 'Alquiler Piso', 
        value: 332.12 
    },
    {   
        date: new Date(2021, 9, 15), 
        category: 'salary', 
        title: 'Salario', 
        value: 4032.12 
    }
];