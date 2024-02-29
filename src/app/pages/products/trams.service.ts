import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tram } from '../../models/tram.type';

@Injectable({
  providedIn: 'root'
})
export class TramsService {
  getTrams(): Observable<Tram[]> {
    const trams: Tram[] = [
      {
        name: 'Citadis',
        description:
          'The Citadis is a family of low-floor trams (streetcars) and light rail vehicles built by Alstom.',
        price: 1000000,
        imageUrl: 'assets/trams/citadis.jpg'
      },
      {
        name: 'Flexity',
        description:
          'Flexity trams are a family of modern trams manufactured by Bombardier Transportation.',
        price: 1200000,
        imageUrl: 'assets/trams/flexity.jpg'
      },
      {
        name: 'Cobra',
        description:
          'The Cobra is a family of high-floor trams manufactured by Siemens AG.',
        price: 900000,
        imageUrl: 'assets/trams/cobra.jpg'
      },
      {
        name: 'Eurotram',
        description:
          'The Eurotram is a family of high-floor trams manufactured by Alstom.',
        price: 1100000,
        imageUrl: 'assets/trams/eurotram.jpg'
      }
    ];

    return of(trams);
  }
}