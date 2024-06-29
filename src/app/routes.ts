import { Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { DetailsComponent } from './components/Booking/booking.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HotelLocationComponent } from './components/hotel/hotel.component';
import { ToursLocation } from './Model/tours-location';
import { Router } from '@angular/router';
import { ToursLocationComponent } from './components/tours/tours.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './Guards/auth.guard';
const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home Page"
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Booking Page'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'

    },
    
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'hotel', canActivate:[authGuard],children:[
        {path:'', component:HotelLocationComponent},
        {path:':id', component:HotelLocationComponent}
    ]},
    {path:'register', component:RegisterComponent},
    {path:"**", component:NotFoundComponent},
    
    // {
    //     path: '',
    //     component: LoginComponent,
    //     children:[

    //         {
    //             path: 'details/:id',
    //             component: DetailsComponent,
    //             title: 'Details Page'
    //         },
    //         {
    //             path: '',
    //             component: HomeComponent,
    //             title: "Home Page"
    //         },

    //     ]


    // }
    { path: '**', component:NotFoundComponent}

];

export default routeConfig;