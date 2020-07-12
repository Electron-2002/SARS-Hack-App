/* eslint-disable linebreak-style */
/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

export default class AppointmentView extends View {
  constructor(el, context) {
    super(el, template, context, null);

    this.context.api.generateInterviewId();
  }
}
