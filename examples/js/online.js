 // see issue https://github.com/networked-aframe/networked-aframe/issues/267
 NAF.schemas.getComponentsOriginal = NAF.schemas.getComponents;

 NAF.schemas.getComponents = (template) => {
   if (!NAF.schemas.hasTemplate('#head-template')) {
     NAF.schemas.add({
       template: '#head-template',
       components: [
         'position',
         'rotation',
         {
           selector: '.head',
           component: 'material',
           property: 'color'
         }
       ]
     });

   }
   if (!NAF.schemas.hasTemplate('#sphere-template')) {
       NAF.schemas.add({
         template: '#sphere-template',
         components: [
           'position',
           {
             component: 'material',
             property: 'color'
           }
         ]
       });
     }

   const components = NAF.schemas.getComponentsOriginal(template);
   return components;
 };