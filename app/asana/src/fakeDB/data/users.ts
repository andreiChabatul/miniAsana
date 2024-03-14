import { IProfile } from "src/types/task";
import { EMPTY_FOTO, fotoOne, fotoThree, fotoTwo } from "./foto";

export const USERS: Record<string, IProfile> =

{
    'ae411cfc-1f4a-4d1a-8a14-cfb71da9e011':
    {
        id: 'ae411cfc-1f4a-4d1a-8a14-cfb71da9e011',
        name: 'Misha',
        image: EMPTY_FOTO
    },
    '0553fe20-03b7-4005-986c-93c9bfc7928e': {
        id: '0553fe20-03b7-4005-986c-93c9bfc7928e',
        name: 'Misha',
        image: fotoThree
    },
    '014a12c6-4e11-4749-bc94-c70baea20f43':
    {
        id: '014a12c6-4e11-4749-bc94-c70baea20f43',
        name: 'Irisha',
        image: EMPTY_FOTO
    },
    'dde60cd3-eb2d-46f2-9531-485b0d285992':
    {
        id: 'dde60cd3-eb2d-46f2-9531-485b0d285992',
        name: 'Andrei',
        image: fotoTwo
    }
    , '0165b913-c912-4ecd-ab14-de36fac84ccb': {
        id: 'dde60cd3-eb2d-46f2-9531-485b0d285992',
        name: 'Nikolas',
        image: fotoOne
    },
    '65272e01-2eda-4483-b43b-d3a8be7f8036':{
        id: 'dde60cd3-eb2d-46f2-9531-485b0d285992',
        name: 'Evgeni',
        image: fotoThree
    },

}