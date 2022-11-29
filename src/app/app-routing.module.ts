import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {PhotoListComponent} from "./photos/photo-list/photo-list.component";
import {PhotoFormComponent} from "./photos/photo-form/photo-form.component";
import {NotFoundComponent} from "./errors/not-found/not-found.component";
import {PhotoListResolver} from "./photos/photo-list/photo-list.resolver";
import {HomeModule} from "./home/home.module";
import {RequiresAuthenticationGuard} from "./core/auth/requires-authentication.guard";
import {PhotoDetailComponent} from "./photos/photo-detail/photo-detail.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: "home",
    // @ts-ignore
    loadChildren: () => HomeModule,
  },
  {
    path: "user/:username",
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    }
  },
  {
    path: "p/add",
    component: PhotoFormComponent,
    canActivate: [RequiresAuthenticationGuard]
  },
  {
    path: "p/:photoId",
    component: PhotoDetailComponent,
  },
  {
    path: "not-found",
    component: NotFoundComponent
  },
  {
    path: "**",
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
