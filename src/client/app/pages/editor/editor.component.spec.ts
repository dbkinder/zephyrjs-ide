// Core
import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

// Third-party
import { ResourceModule } from 'ng2-resource-rest';

// Own
import { AppDataService } from '../../app.data.service';
import { EditorModule } from './editor.module';


export function main() {
   describe('Editor component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

      TestBed.configureTestingModule({
        declarations: [TestComponent],
        providers: [AppDataService],
        imports: [EditorModule, ResourceModule]
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            // tslint:disable-next-line:no-unused-locals
            let editorDOMEl = fixture.debugElement.children[0].nativeElement;

            // TODO: test
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-editor></sd-editor>'
})
class TestComponent {}
