import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DpsHeaderComponent } from './dps-header.component';

describe('DpsHeaderComponent', () => {
    let component: DpsHeaderComponent;
    let fixture: ComponentFixture<DpsHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DpsHeaderComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DpsHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // Add more tests here
});