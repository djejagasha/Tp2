import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YoutubeChannels } from './youtube-channels';

describe('YoutubeChannels', () => {
  let component: YoutubeChannels;
  let fixture: ComponentFixture<YoutubeChannels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YoutubeChannels],
    }).compileComponents();

    fixture = TestBed.createComponent(YoutubeChannels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
