/** @type {import('stylelint').Config} */

import { propertyOrdering } from 'stylelint-semantic-groups'

export default {
  extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order', 'stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
    'selector-class-pattern': null,
    'declaration-empty-line-before': null,
    'shorthand-property-no-redundant-values': null,
    'value-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'selector-no-vendor-prefix': null,
    'no-empty-source': null,
    'block-no-empty': null,
    'no-descending-specificity': null,
    'keyframes-name-pattern': [
      '^[a-z]+([A-Z][a-z0-9]*)*$',
      {
        message: 'Expected keyframe name to be camelCase'
      }
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['desktop', 'tablet', 'mobile']
      }
    ],
    'order/order': [
      'custom-properties',
      'dollar-variables',
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: false
      },
      {
        type: 'at-rule',
        name: 'mixin'
      },
      'declarations',
      {
        type: 'rule',
        selector: /^&:|^:[\w-]+$/
      },
      {
        type: 'rule',
        selector: /^&::|^::[\w-]+$/
      },
      'at-rules',
      'rules',
      {
        type: 'at-rule',
        name: 'include',
        hasBlock: true
      },
      {
        type: 'at-rule',
        name: 'media'
      }
    ],
    'order/properties-order': propertyOrdering
  }
}
