#Angular doc

* Subject

Les Subject sont à la fois des Observers et des Observables (ils ont à la fois la méthode "subscribe" et la méthode "next". Ils émettent de nouvelles valeurs via la méthode "next".

* Forms

Reactive forms 

Logique basée dans le composant => découplage de la logique et du HTML => meilleure testabilité

Template Driven

Logique basée sur les directives à l'intérieur du HTML

* ng-content

Cette balise permet d'injecter dans le composant enfant ce qu'il y a entre les deux balises du composant parent

* Structural directives

Ce sont les directives avec une *, comme *ngIf ou *ngFor. Elles wrappent l'élément sur lequel elles s'appliquent autour d'un <ng-template myDirective> (sans *) 

* @Inject()

Permet d'injecter une valeur dans le constructeur d'un Component.

Example: 

```ts
export const HELLO_MESSAGE = new InjectionToken<string>('Hello!'); Now use the above constant in providers.
  // ....
  providers: [ 
    { provide: HELLO_MESSAGE, useValue: 'Hello World!' }
]
// ...
constructor(@Inject(HELLO_MESSAGE) private message: string) { 
} 
```
