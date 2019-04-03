import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @Output()
  globalFilterChange: EventEmitter<any> = new EventEmitter<any>();

  selectedFilter = "ORG_UNIT";
  constructor() {}

  ngOnInit() {}
  onFilterUpdateAction(dataSelections: any[]) {
    console.log(dataSelections);
    this.globalFilterChange.emit({
      globalSelections: dataSelections
    });
  }
}
