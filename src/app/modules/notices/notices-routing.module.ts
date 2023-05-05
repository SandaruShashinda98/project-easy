import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoticeComponent } from './create-notice/create-notice.component';

const routes: Routes = [
  {
    path: '',
    component: CreateNoticeComponent,
    // canActivate: [ModuleGuard, PermissionGuard],
    // data: {
    //   title: 'Customers',
    //   goBackEnabled: true,
    //   searchBarEnabled: true,
    //   module: MODULES.CUSTOMERS,
    //   allowedPermissions: getModulePermission(MODULES.CUSTOMERS, [
    //     PERMISSION_ACTIONS.READ,
    //   ]),
    // },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticesRoutingModule { }
