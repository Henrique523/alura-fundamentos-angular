import {Directive, ElementRef, Input, OnInit, Renderer2} from "@angular/core";
import IPhoto from "../../../interfaces/IPhoto";
import {UserService} from "../../../core/user/user.service";

@Directive({
  selector: '[photoOwnerOnly]'
})
export class PhotoOwnerOnlyDirective implements OnInit {
  // @ts-ignore
  @Input() ownedPhoto: IPhoto;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getUser().subscribe(user => {
      if (!user || user?.id != this.ownedPhoto.userId) {
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      }
    });


  }
}
