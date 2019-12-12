import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy{
  private _viewportMobileQuery: MediaQueryList;
  public get viewportMobileQuery(): MediaQueryList {
    return this._viewportMobileQuery;
  }
  public set viewportMobileQuery(value: MediaQueryList) {
    this._viewportMobileQuery = value;
  }

  private _viewportQueryListener: () => void;

  constructor(private changeDetectionRef: ChangeDetectorRef, private media: MediaMatcher) {
    this.viewportMobileQuery = media.matchMedia('(max-width: 600px)');
    this._viewportQueryListener = () => changeDetectionRef.detectChanges();
    this.viewportMobileQuery.addEventListener('change', this._viewportQueryListener);
  }

  ngOnDestroy(): void {
    this.viewportMobileQuery.removeEventListener('change', this._viewportQueryListener);
  }
}
