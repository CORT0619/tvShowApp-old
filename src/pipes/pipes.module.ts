import { NgModule } from '@angular/core';
import { OverviewTransformPipe } from './overviewTransform.pipe';


@NgModule({
  declarations: [
    OverviewTransformPipe
  ],
  exports: [
    OverviewTransformPipe
  ]
})
export class PipesModule {}
