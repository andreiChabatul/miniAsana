import { EPriority, EStatus, ITask } from "src/types/task";

export const mocTask: ITask[] = [
    {
        id: '67cd00b4-da7b-4da0-9020-55b4e0543c81',
        title: 'Сделать мотоцикл Джиксер',
        status: EStatus.loss,
        deadline: new Date(2024, 2, 13, 0, 0, 0, 0),
        priority: EPriority.none,
        assignee: ['0553fe20-03b7-4005-986c-93c9bfc7928e']
    },
    {
        id: 'b80293e0-79c6-48c4-b393-7750dc5e09e2',
        title: 'Купить Kawasaki zx10r',
        status: EStatus.done,
        deadline: new Date(2024, 2, 15, 0, 0, 0, 0),
        priority: EPriority.none,
        assignee: ['0553fe20-03b7-4005-986c-93c9bfc7928e']
    },
    {
        id: 'd7467350-8063-4478-a9d0-2c240e15eedb',
        title: 'Доверстать страницу таска',
        status: EStatus.new,
        deadline: new Date(2024, 2, 17, 0, 0, 0, 0),
        priority: EPriority.none,
        assignee: ['0553fe20-03b7-4005-986c-93c9bfc7928e']
    },
    {
        id: '5e75ff9a-2416-468d-8f1b-850de19f80a3 ',
        title: 'Позвонить в магазин и заказать телефон',
        status: EStatus.loss,
        deadline: new Date(2024, 2, 21, 0, 0, 0, 0),
        priority: EPriority.none,
        assignee: ['0553fe20-03b7-4005-986c-93c9bfc7928e', 'dde60cd3-eb2d-46f2-9531-485b0d285992', '0165b913-c912-4ecd-ab14-de36fac84ccb']
    },
    {
        id: '74ab286f-fe16-42bb-a6e5-309113c785a2',
        title: 'Подать документы',
        status: EStatus.progress,
        deadline: new Date(2024, 2, 12, 0, 0, 0, 0),
        priority: EPriority.medium,
        assignee: ['65272e01-2eda-4483-b43b-d3a8be7f8036', '0165b913-c912-4ecd-ab14-de36fac84ccb']
    },
    {
        id: 'e1acd66e-d3aa-43d4-b2d6-a6017908e585',
        title: 'Доделать тестовое задание',
        status: EStatus.new,
        priority: EPriority.low,
    }
]