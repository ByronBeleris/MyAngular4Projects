import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    @HostBinding('class.open') isOpen = false;
    @HostListener('click') toggleOpen(){
        this.isOpen = !this.isOpen;
    }
}

// Now you can use this Dropdown directive, after you pass it in app.module.ts, in .html

// IN RECIPE DETAIL html

// </div>
// <div class="row">
//     <div class="col-sm-12">
//         <div class="btn-group" appDropdown>
//             <button type="button" class="btn btn-primary dropdown-toggle" >
//             Manage Recipe<span class="caret"></span>
//       </button>
//             <ul class="dropdown-menu">
//                 <li>
//                     <a href="#">To Shopping List</a>
//                 </li>
//                 <li>
//                     <a href="#">Edit Recipe</a>
//                 </li>
//                 <li>
//                     <a href="#">Delete Recipe</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </div>

// IN HEADER html


// <div appDropdown>
//     <a class="nav-link" href="#" ngbDropdownToggle>Manage</a>
//     <div class="dropdown-menu myBoxSize">
//         <li class="nav-item">
//             <a class="nav-link" href="#">Save Data</a>
//         </li>
//         <li class="nav-item">
//             <a class="nav-link" href="#">Fetch Data</a>
//         </li>
//     </div>
// </div>
