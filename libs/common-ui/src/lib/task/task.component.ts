import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'myorg-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() task: any;

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  public onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  // eslint-disable-next-line @angular-eslint/no-output-on-prefix
  public onArchiveTask = new EventEmitter<Event>();

  /**
   * Component method to trigger the onPin event
   * @param id string
   */
  onPin(id: any) {
    this.onPinTask.emit(id);
  }
  /**
   * Component method to trigger the onArchive event
   * @param id string
   */
  onArchive(id: any) {
    this.onArchiveTask.emit(id);
  }
}
