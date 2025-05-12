export default function (plop) {
  plop.setGenerator('create-component', {
    description: 'Create component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name:'
      },
      {
        type: 'input',
        name: 'path',
        message: 'Component path (ex src/components/entities/):'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '{{path}}{{name}}/{{name}}.tsx',
        templateFile: '_plop-templates/create-component/component.hbs'
      },
      {
        type: 'add',
        path: '{{path}}{{name}}/index.ts',
        templateFile: '_plop-templates/create-component/index.hbs'
      },
      {
        type: 'add',
        path: '{{path}}{{name}}/styles.module.scss',
        templateFile: '_plop-templates/create-component/styles.hbs'
      }
    ]
  })
}
