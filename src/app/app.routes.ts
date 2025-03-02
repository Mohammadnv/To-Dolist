import { Routes } from '@angular/router';
import { LoginpageComponent } from './components/login/login.component';
import { TodosComponent } from './components/todolist/todo.component';

export const routes: Routes = [

    {path:'',
        pathMatch:'full',
        component:LoginpageComponent  
    },
    {
        path:'login',
        component:LoginpageComponent
    },
    {
        path:'todo',
        component:TodosComponent
    }
];
