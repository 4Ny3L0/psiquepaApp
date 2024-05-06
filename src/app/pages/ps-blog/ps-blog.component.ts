import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ps-blog',
  standalone: true,
  imports: [NgFor],
  templateUrl: './ps-blog.component.html',
  styleUrl: './ps-blog.component.css',
})
export class PsBlogComponent {
  blogs: Array<any> = [
    {
      title: 'Hablemos de salud mental',
      publishedDate: '04/04/2024',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos consequuntur voluptas temporibus quis culpa harum nostrum fugiat exercitationem officia blanditiis quod molestias eveniet libero, molestiae dolor tempore similique ipsam. At?',
    },
    {
      title: 'Las emociones como mecanismo de neutralización',
      publishedDate: '04/04/2024',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos consequuntur voluptas temporibus quis culpa harum nostrum fugiat exercitationem officia blanditiis quod molestias eveniet libero, molestiae dolor tempore similique ipsam. At?',
    },
    {
      title: 'La responsabilidad afectiva',
      publishedDate: '04/04/2024',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos consequuntur voluptas temporibus quis culpa harum nostrum fugiat exercitationem officia blanditiis quod molestias eveniet libero, molestiae dolor tempore similique ipsam. At?',
    },
  ];
}
