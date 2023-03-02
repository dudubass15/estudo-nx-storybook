import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports: [CommonModule, CommonUiModule],
  declarations: [BannerComponent, TaskComponent, TaskListComponent],
  exports: [BannerComponent, TaskComponent, TaskListComponent],
})
export class CommonUiModule {}
