import Vue from 'vue';
import { shallowMount } from "@vue/test-utils";
import Header from 'components/layouts/Header';

describe('Header', () => {
    it('should render correct contents for .navbar-brand', () => {
      const wrapper = shallowMount(Header);
      expect(wrapper).not.toBeNull();
    })
});