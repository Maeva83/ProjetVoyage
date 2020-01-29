import { VoyagePanierComponent } from './../../../../ProjetFinal/src/app/voyage-panier/voyage-panier.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PanierComponent } from './panier.component';


describe('CartComponent', () => {
  let component: PanierComponent;
  let fixture: ComponentFixture<PanierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
