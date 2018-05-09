import { bool } from '@ember/object/computed';
import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  tagName: 'button',
  layout,
  classNameBindings: ['isActive:active'],
  isActive: bool('editor.activeMarkupTagNames.isA'),
  click() {
    let editor = this.get('editor');
    editor.toggleLink();
  }
});
